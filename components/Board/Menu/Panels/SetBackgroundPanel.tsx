import { FC } from "react";
import { IPanelProps, panels } from "./../MenuPopover";
import { LittleButton } from '../../../../components/LittleButton'
import { MdKeyboardArrowLeft, MdClose } from 'react-icons/md'
import { SetBackgroundButton } from "../../../../components/SetBackgroundButton";

const SetBackgroundPanel: FC<IPanelProps> = ({ setPopover, setActivePanel }) => {
  return (
    <>
      <div style={{ width: "500px" }}>
        <div className="flex justify-between mb-3 items-center">

          <LittleButton style={{ height: "40px", width: "40px", padding: "5px" }} color="transparent" handler={() => setActivePanel(panels.default)} >
            <MdKeyboardArrowLeft size={40} />
          </LittleButton>

          <span>Выберите фон</span>

          <LittleButton style={{ height: "40px", width: "40px" }} color="transparent" handler={() => setPopover(false)}>
            <MdClose size={40} />
          </LittleButton>
        </div>

        <div className="flex flex-wrap justify-center w-full mx-auto">
          <SetBackgroundButton type="color" background="bg-green-500" >Зеленый</SetBackgroundButton>
          <SetBackgroundButton type="color" background="bg-red-500" >Красный</SetBackgroundButton>
          <SetBackgroundButton type="color" background="bg-gray-200" >Серый</SetBackgroundButton>
          <SetBackgroundButton type="gradient" background="AGB_1">Анимированный градиент</SetBackgroundButton>
          <SetBackgroundButton type="gradient" background="AGB_2">Анимированный градиент</SetBackgroundButton>
          <SetBackgroundButton type="gradient" background="AGB_3">Анимированный градиент</SetBackgroundButton>
        </div>

      </div>
    </>
  )
}

export { SetBackgroundPanel }