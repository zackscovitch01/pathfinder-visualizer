import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const disjktra = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversedTiles: TileType[] = [base];

  while (untraversedTiles.length > 0) {
    untraversedTiles.sort((a, b) => a.distance - b.distance);
    const currentTile = untraversedTiles.shift();
    if (currentTile?.isWall) continue;
    if (currentTile?.distance === Infinity) break;
    currentTile!.isTraversed = true;
    traversedTiles.push(currentTile);
    if (isEqual(currentTile!, endTile)) break;
    const neighbors = getUntraversedNeighbors(grid, currentTile!);
    for (let i = 0; i < neighbors.length; i++) {
      if (currentTile?.distance! + 1 < neighbors[i].distance) {
        dropFromQueue(neighbors[i], untraversedTiles);
        neighbors[i].distance = currentTile?.distance! + 1;
        neighbors[i].parent = currentTile as TileType;
        untraversedTiles.push(neighbors[i]);
      }
    }
  }
  const path: TileType[] = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent as TileType;
  }
  return { traversedTiles, path };
};
