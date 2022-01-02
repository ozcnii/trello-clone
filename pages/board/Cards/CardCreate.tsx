import { FC, useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { BoardSlice } from "../Slices/BoardSlice";
import { MdClose } from 'react-icons/md';

interface IProps {
  isEdit: boolean,
  setIsEdit: (arg: boolean) => void
  columnId: string,
}

const CardCreate: FC<IProps> = ({ isEdit, setIsEdit, columnId}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch()
  const { createCard } = BoardSlice.actions;
  
  const cardCreate = (event: any) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if (value?.trim().length) {
      dispatch(createCard({value: value.trim(), columnId: columnId}))
      inputRef.current.value = "";
    }
  }
  
  return (
    <>
      {isEdit
        ? (<form onSubmit={ event => cardCreate(event)}>
          <textarea
            style={{minHeight: "70px", boxShadow: "0 1px 0 #091e4240"}} 
            ref={inputRef} autoFocus
            className="mb-1 resize-y focus:outline-none rounded-md mr-5 p-3 w-full bg-gray-50 h-10" placeholder="Введите заголовок"></textarea>
          
          <div className="flex">
            <button
              style={{ width: "200px" }} className="ease-in bg-blue-600 text-blue-50 duration-200 cursor-pointer rounded-md hover:bg-blue-700 p-2 mr-2 ">
              + Добавить карточку
            </button>

            <button
              onClick={() => setIsEdit(false)}
              className="font-bold text-gray-700 hover:text-stone-900 ease-in duration-200 cursor-pointer rounded-md px-3 pr-3 py-1">
              <MdClose style={{fontSize: "1.25rem" }} />
            </button>
          </div>

        </form >)
        : (<div>
          <button
            onClick={() => setIsEdit(true)}
            className="ease-in duration-200 cursor-pointer rounded-md hover:bg-gray-400 p-2 px-3">
            + Добавить карточку
          </button>
        </div>)
      }
    </>

  )
}

export { CardCreate }