import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Column } from "./Column";
import { ColumnCreate } from "./ColumnCreate";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { BoardSlice } from "../Slices/BoardSlice";

const Columns: FC = () => {
  const { columns } = useAppSelector(state => state.BoardReducer);
  const dispatch = useAppDispatch();
  const { sortCards } = BoardSlice.actions;

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    dispatch(sortCards({
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index
    }));

   }

  return (
    <div style={{ height: "85vh" }} className='flex px-10 py-5 overflow-x-scroll'>

      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(column => <Column key={column.id} column={column} />)}
      </DragDropContext>

      <div>
        <ColumnCreate />
      </div>
    </div>
  )
}

export { Columns }