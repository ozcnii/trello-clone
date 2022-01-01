import { FC, useState } from "react";
import { Card } from "../Cards/Card";
import { IColumn } from "../../../models/board.models";
import { CardCreate } from "../Cards/CardCreate";
import ScrollableFeed from 'react-scrollable-feed'

interface IProps {
  column: IColumn
}

const Column: FC<IProps> = ({ column }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div style={{ minHeight: "300px", width: "300px" }}>
      <div className="p-2 bg-gray-300 mr-5 rounded-md">
        <div className="justify-between mb-2 px-2 mt-1 flex">
          <div className="break-all">
            {column.name}
          </div>

          <button
            style={{ maxHeight: "24px" }}
            className="ml-1 px-2 items-center ease-out duration-200 flex justify-center cursor-pointer hover:bg-gray-400 rounded-md">
            ...
          </button>
        </div>

        <div style={{ maxHeight: "55vh" }}
          className="overflow-y-auto mb-2">
          <ScrollableFeed>
            {column.cards.map(card => <Card key={card.id} card={card} />)}
          </ScrollableFeed>
        </div>
        <CardCreate isEdit={isEdit} setIsEdit={setIsEdit} columnId={column.id} />

      </div>
    </div>
  )
}

export { Column }