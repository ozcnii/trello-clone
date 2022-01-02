import { FC } from "react";
import { IBackground } from "../models/board.models";
import { BoardSlice } from "../pages/board/Slices/BoardSlice";
import { useAppDispatch } from "../store/hooks";

interface IProps extends IBackground {
  className?: string
}

const SetBackgroundButton: FC<IProps> = ({ children, type, background, className }) => {
  const { setBackground } = BoardSlice.actions
  const dispatch = useAppDispatch()

  const setHandler = () => {
    const bgObject = { type, background }
    localStorage.setItem('background', JSON.stringify(bgObject))
    dispatch(setBackground(bgObject));
  }

  return (
    <div onClick={setHandler}
      style={{ height: "140px", width: "140px", boxShadow: "0 1px 0 #091e4240"}}
      className={` text-center break-word ease-out duration-200 cursor-pointer rounded-md flex items-center justify-center m-3 hover:contrast-125 hover:scale-110 ${background} ${className}`}
    >{children}</div>
  )
}

export { SetBackgroundButton }