import binaryTree from "../lib/algorithms/maze/binaryTree";
import constructBorder from "./constructBorder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

const runMazeAlgorithm = async ({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: {
  maze: MazeType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) => {
  if (maze === "BINARY_TREE") {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  } else if (maze === "RECURSIVE_DIVISION") {
    await constructBorder(grid, startTile, endTile);
  }
};
export default runMazeAlgorithm;
