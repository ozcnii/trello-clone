import { FC } from "react";
import { useAppSelector } from "../../../store/hooks";
import { Column } from "./Column";
import { ColumnCreate } from "./ColumnCreate";

const Columns: FC = () => {
  const { columns } = useAppSelector(state => state.BoardReducer)

  return (
    <div style={{ height: "85vh" }} className='flex overflow-y-auto px-10 py-5'>

      { columns.map( column => <Column key={column.id} column={column} />) }

      <div>
        <ColumnCreate/>
      </div>
    </div>
  )
}

export { Columns }