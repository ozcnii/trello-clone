import { IBoard } from "../../../models/board.models";

export const findCurrentBoard = (boards: IBoard[], currentBoardId: string) => {
  return boards.find(board => board.id === currentBoardId);
}