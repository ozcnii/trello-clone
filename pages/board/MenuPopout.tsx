import { FC, useState } from "react";
import { DefaultPanel } from "./MenuPanels/DefaultPanel";
import { SetBackgroundPanel } from './MenuPanels/SetBackgroundPanel';

interface IProps {
  setPopout: (arg: boolean) => void,
}

export interface IPanelProps {
  setPopout: (arg: boolean) => void
  setActivePanel: (arg: any) => void
}

export const panels = {
  default: "default",
  editBackground: "editBackground",
}

const MenuPopout: FC<IProps> = ({ setPopout }) => {
  const [activePanel, setActivePanel] = useState(panels.default)

  return (
    <div
      onClick={(event) => {
        event?.stopPropagation()
        setPopout(false)
      }}
      className="absolute inset-0 h-screen w-screen">

      <div className="relative">
        <div style={{ width: "300px", top: "75px", left: "120px",  boxShadow: "0 3px 2px #091e4240" }}
          onClick={(event) => event?.stopPropagation()}
          className="absolute bg-gray-300 rounded-md p-4">

          {activePanel === panels.default
            ? <DefaultPanel setPopout={setPopout} setActivePanel={setActivePanel} />
            : activePanel === panels.editBackground
              ? <SetBackgroundPanel setPopout={setPopout} setActivePanel={setActivePanel} />
              : null
          }

        </div>
      </div>
    </div>
  )
}

export { MenuPopout }