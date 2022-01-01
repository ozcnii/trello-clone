import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { IPanelProps, panels } from "../MenuPopout";
import { BoardSlice } from "../Slices/BoardSlice";
import { LittleButton } from './../../../components/LittleButton'

const SetBackgroundPanel: FC<IPanelProps> = ({ setPopout, setActivePanel }) => {
  const { setBackground } = BoardSlice.actions
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex justify-between mb-3">
        <LittleButton color="green" handler={() => setActivePanel(panels.default)} >{"<-"}</LittleButton>
        <span>Menu</span>
        <LittleButton color="red" handler={() => setPopout(false)}>X</LittleButton>
      </div>

      <div className="flex flex-wrap">

        <div onClick={() => dispatch(setBackground({ isImage: false, background: "green-500" }))}
          style={{ height: "110px", width: "110px" }}
          className="ease-out duration-200 cursor-pointer rounded-md flex items-center justify-center bg-green-500 m-3 hover:contrast-125"
        >Green</div>

        <div onClick={() => dispatch(setBackground({ isImage: false, background: "red-500" }))}
          style={{ height: "110px", width: "110px" }}
          className="ease-out duration-200 cursor-pointer rounded-md flex items-center justify-center bg-red-500 m-3 hover:contrast-125"
        >Red</div>

      </div>
    </>
  )
}

export { SetBackgroundPanel }