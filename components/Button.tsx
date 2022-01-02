import { FC } from "react";

interface IProps {
  className?: string,
  outline?: boolean
}

const Button: FC<IProps> = ({ children, className, outline}) => {
  const defaultClass = "ease-out duration-200 text-xl border-2 rounded-md p-2 border-blue-500 bg-blue-500 text-blue-50 hover:bg-blue-600 hover:border-blue-600";
  const outlineClass = "ease-out duration-200 text-xl border-2 rounded-md p-2 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-600 hover:text-blue-50 hover:border-blue-600";
  let cn = '';

  if (outline) {
    cn = outlineClass + " " + className;
  } else {
    cn = defaultClass + " " + className;
  }
  
  return (
    <button className={cn} >
      {children}
    </button>
  )
}

export { Button }