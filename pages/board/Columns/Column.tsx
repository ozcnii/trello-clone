import { FC, useState } from "react";
import { Card } from "../Cards/Card";
import { IColumn } from "../../../models/board.models";
import { CardCreate } from "../Cards/CardCreate";
import { Droppable } from 'react-beautiful-dnd';
import { useAppDispatch } from "../../../store/hooks";
import { BoardSlice } from "../Slices/BoardSlice";
import { ColumnPopover } from "./ColumnPopover";

interface IProps {
  column: IColumn
}

const Column: FC<IProps> = ({ column }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const { columnRemove } = BoardSlice.actions;
  const [popover, setPopover] = useState(false);

  const removeColumn = () => {
    dispatch(columnRemove(column.id));
  }

  return (
    <div style={{ width: "300px", minWidth: "270px" }}>
      <div className="p-2 bg-gray-300 mr-5 rounded-md">
        <div className="justify-between mb-2 px-2 mt-1 flex">
          <div className="break-all">
            {column.name}
          </div>

          <button
            onClick={() => setPopover(true)}
            style={{ maxHeight: "24px" }}
            className="ml-1 px-2 items-center ease-out duration-200 flex justify-center cursor-pointer hover:bg-gray-400 rounded-md">
            ...
            {popover
              ? <ColumnPopover setPopover={setPopover} removeColumn={removeColumn} />
              : null
            }
          </button>
        </div>

        <Droppable droppableId={column.id}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div>
                {column.cards.map((card, index) => <Card key={card.id} card={card} index={index} columnId={column.id} />)}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <CardCreate isEdit={isEdit} setIsEdit={setIsEdit} columnId={column.id} />

      </div>
    </div>
  )
}

export { Column }