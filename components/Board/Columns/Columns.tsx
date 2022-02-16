import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Column } from "./Column";
import { ColumnCreate } from "./ColumnCreate";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { BoardSlice } from "../../../store/Slices/Board/BoardSlice";

const Columns: FC = () => {
  const currentBoardId = useAppSelector(
    (state) => state.BoardReducer.currentBoardId
  );
  const { boards } = useAppSelector((state) => state.BoardReducer);
  const dispatch = useAppDispatch();

  const currentBoard = boards.find((board) => board.id === currentBoardId);
  const { sortCards } = BoardSlice.actions;

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sortCards({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
      })
    );
  };

  return (
    <div
      style={{ height: "85vh" }}
      className="flex px-10 py-5 overflow-x-scroll"
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {currentBoard?.columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>

      <div>
        <ColumnCreate />
      </div>
    </div>
  );
};

export { Columns };
