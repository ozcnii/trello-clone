import { FC, useState } from "react";
import { DefaultPanel } from "./Panels/DefaultPanel";
import { SetBackgroundPanel } from './Panels/SetBackgroundPanel';

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

const MenuPopover: FC<IProps> = ({ setPopover }) => {
  const [activePanel, setActivePanel] = useState(panels.default)

  return (
    <>
      <div className="relative">
        <div style={{ top: "20px", boxShadow: "0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214" }}
          onClick={(event) => event?.stopPropagation()}
          className="popover-animation absolute z-20 bg-gray-200 rounded-md p-4">

          {activePanel === panels.default
            ? <DefaultPanel setPopover={setPopover} setActivePanel={setActivePanel} />
            : activePanel === panels.editBackground
              ? <SetBackgroundPanel setPopover={setPopover} setActivePanel={setActivePanel} />
              : null
          }
        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        setPopover(false)
      }} className='cursor-default z-10 absolute h-screen bg-transparent top-0 right-0 left-0 bottom-0'></div>
    </>
  )
}

export { MenuPopover }