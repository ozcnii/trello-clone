import { FC } from "react";
import { LittleButton } from "../../../components/LittleButton";
import { IPanelProps, panels } from '../MenuPopover'
import { MdClose } from 'react-icons/md';
import { Button } from "../../../components/Button";

const DefaultPanel: FC<IPanelProps> = ({ setPopover, setActivePanel }) => {
  return (
    <>
      <div className="flex justify-between mb-3 items-center">
        <span>Меню</span>
        <LittleButton style={{ height: "40px", width: "40px" }} color="transparent" handler={() => setPopover(false)}>
          <MdClose size={40} />
        </LittleButton>
      </div>

      <div style={{width: "250px"}} onClick={() => setActivePanel(panels.editBackground)}>
        <Button className="mb-3 px-3 py-2 rounded-md cursor-pointer ease-in duration-200 w-full text-base " >
          Сменить фон
        </Button>
      </div>
    </>
  )
}

export { DefaultPanel }