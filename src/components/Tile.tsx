import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
}) {
  let tileStyleType;
  if (isStart) {
    tileStyleType = START_TILE_STYLE;
  } else if (isEnd) {
    tileStyleType = END_TILE_STYLE;
  } else if (isWall) {
    tileStyleType = WALL_TILE_STYLE;
  } else if (isPath) {
    tileStyleType = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileStyleType = TRAVERSED_TILE_STYLE;
  } else {
    tileStyleType = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileStyleType, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
    />
  );
}
export default Tile;
