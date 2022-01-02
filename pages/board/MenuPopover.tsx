import { FC, useState } from "react";
import { DefaultPanel } from "./MenuPanels/DefaultPanel";
import { SetBackgroundPanel } from './MenuPanels/SetBackgroundPanel';

interface IProps {
  setPopover: (arg: boolean) => void,
}

export interface IPanelProps {
  setPopover: (arg: boolean) => void
  setActivePanel: (arg: any) => void
}

export const panels = {
  default: "default",
  editBackground: "editBackground",
}

const MenuPopout: FC<IProps> = ({ setPopover }) => {
  const [activePanel, setActivePanel] = useState(panels.default)

  return (
    <div
      onClick={(event) => {
        event?.stopPropagation()
        setPopover(false)
      }}
      className="absolute inset-0 h-screen w-screen">

      <div className="relative">
        <div style={{ maxWidth: "530px", top: "75px", left: "120px",  boxShadow: "0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214"  }}
          onClick={(event) => event?.stopPropagation()}
          className="absolute bg-gray-200 rounded-md p-4">

          {activePanel === panels.default
            ? <DefaultPanel setPopover={setPopover} setActivePanel={setActivePanel} />
            : activePanel === panels.editBackground
              ? <SetBackgroundPanel setPopover={setPopover} setActivePanel={setActivePanel} />
              : null
          }

        </div>
      </div>
    </div>
  )
}

export { MenuPopout }