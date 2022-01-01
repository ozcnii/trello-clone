import { FC } from "react";
import { LittleButton } from "../../../components/LittleButton";
import { IPanelProps, panels } from '../MenuPopout'

const DefaultPanel: FC<IPanelProps> = ({ setPopout, setActivePanel }) => {
  return (
    <>
      <div className="flex justify-between mb-3">
        <span>Menu</span>
        <LittleButton color="red" handler={() => setPopout(false)} >X</LittleButton>
      </div>

      <div>
        <ul>
          <li onClick={() => setActivePanel(panels.editBackground)}
            className="mb-3 bg-gray-500 px-3 py-2 rounded-md cursor-pointer ease-out duration-200 hover:bg-gray-600">Сменить фон</li>
        </ul>
      </div>
    </>
  )
}

export { DefaultPanel }