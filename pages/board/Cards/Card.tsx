import { FC } from "react";
import { ICard } from '../../../models/board.models'

interface IPorps {
  card: ICard
}

const Card: FC<IPorps> = ({ card }) => {
  return (
    <div style={{ width: "100%", boxShadow: "0 1px 0 #091e4240" }}
      className="flex justify-between rounded-md p-2 mb-2 bg-gray-50 mr-10">

      <div className="break-all">
        {card.value}
      </div>

      <button
        style={{maxHeight: "24px"}}
        className="ml-1 px-2 items-center ease-out duration-200 flex justify-center cursor-pointer hover:bg-gray-300 rounded-md">
        ...
      </button>

    </div>
  )
}

export { Card }