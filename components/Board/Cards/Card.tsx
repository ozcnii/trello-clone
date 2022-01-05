import { FC, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ICard } from '../../../models/board.models'
import { useAppDispatch } from "../../../store/hooks";
import { BoardSlice } from "../../../store/Slices/Board/BoardSlice";
import { CardPopover } from "./CardPopover";

interface IPorps {
  card: ICard,
  index: number,
  columnId: string
}

const Card: FC<IPorps> = ({ card, index, columnId }) => {
  const dispatch = useAppDispatch();
  const { cardRemove } = BoardSlice.actions;
  const [popover, setPopover] = useState(false);
  
  const removeCard = () => {
    dispatch(cardRemove({ columnId: columnId, cardId: card.id }));
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <div style={{ width: "100%", boxShadow: "0 1px 0 #091e4240" }}
            className="flex justify-between rounded-md p-2 mb-2 bg-gray-50 mr-10">

            <div className="break-all">
              {card.value}
            </div>

            <button 
              onClick={() => setPopover(true)}
              style={{ maxHeight: "24px" }}
              className="ml-1 px-2 items-center ease-out duration-200 flex justify-center cursor-pointer hover:bg-gray-300 rounded-md">
              ...
              {popover
                ? <CardPopover setPopover={setPopover} removeCard={removeCard}/>
                : null 
              }
            </button>

          </div>
        </div>

      )}
      
    </Draggable>
  )
}

export { Card }