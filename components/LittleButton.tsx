import { FC } from "react";


interface IProps {
  handler: (arg: any) => void
  color: "green" | "red" | "transparent",
  style?: {}
} 

const LittleButton: FC<IProps> = ({ handler, color, children, style }) => {
  let className = "flex items-center justify-center ease-out duration-200 p-2 cursor-pointer py-0 rounded-full text-gray-700 hover:text-black"

  if (color === "green") {
    className += " bg-green-500 hover:bg-green-600"
  } else if (color === "red") {
    className += " bg-red-500 hover:bg-red-600"
  }

  return (
    <>
      <div onClick={() => handler(false)}
        style={{ height: "30px", width: "30px", ...style }}
        className={className}
      >{children}</div>
    </>
  )
}

export { LittleButton }