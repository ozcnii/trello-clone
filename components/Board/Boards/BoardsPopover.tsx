import Link from "next/link";
import { FC } from "react";
import { MdClose } from "react-icons/md";
import { LittleButton } from "../../../components/LittleButton";
import { useAppSelector } from "../../../store/hooks";
import { BoardSlice } from "../../../store/Slices/Board/BoardSlice";

interface IProps {
  setPopover: (arg: boolean) => void,
}

const BoardsPopover: FC<IProps> = ({ setPopover }) => {

  const { boards } = useAppSelector(state => state.BoardReducer);
  const { currentBoardId } = useAppSelector(state => state.BoardReducer);
  const { setCurrentBoardId } = BoardSlice.actions;

  return (
    <>
      <div className="relative">
        <div style={{ top: "20px", boxShadow: "0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214" }}
          onClick={(event) => event?.stopPropagation()}
          className="popover-animation absolute z-20 bg-gray-200 rounded-md p-4">

          <div className="flex justify-between mb-3 items-center">
            <span>Рабочие простарнства</span>
            <LittleButton style={{ height: "40px", width: "40px" }} color="transparent" handler={() => setPopover(false)}>
              <MdClose size={40} />
            </LittleButton>
          </div>

          <div style={{ width: "250px", maxHeight: "400px" }}
            className="overflow-x-hidden pr-1" >
            {boards.map(board => {
              return (
                <div key={board.id} onClick={() => setCurrentBoardId(board.id)} className={board.id === currentBoardId ? "font-bold" : ""} >
                  <Link href={`/board/${board.id}`}>
                    <a className="cursor-pointer ease-in duration-200 w-full flex mb-3 px-3 py-2 bg-gray-300 rounded-md items-center hover:bg-gray-400">

                      <div style={{ height: "30px", width: "30px" }} className={`${board.background.background} rounded-full flex mr-3`}></div>
                      <span>{board.name} </span>

                    </a>
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        setPopover(false)
      }} className='cursor-default z-10 absolute h-screen bg-transparent top-0 right-0 left-0 bottom-0'></div>
    </>
  )
}

export { BoardsPopover }