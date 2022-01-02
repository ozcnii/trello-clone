import { FC, useRef, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { BoardSlice } from "../Slices/BoardSlice";
import { MdClose } from 'react-icons/md';

const ColumnCreate: FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch()
  const { createColumn } = BoardSlice.actions;

  const cardCreate = (event: any) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if (value?.trim().length) {
      dispatch(createColumn(value.trim()))
      inputRef.current.value = "";
    }
  }

  return (
    <>
      {isEdit
        ? (<form onSubmit={event => cardCreate(event)}
          style={{width: "270px"}}
          className="bg-gray-300 p-2 rounded-md">
          <input
            style={{ boxShadow: "0 1px 0 #091e4240" }}
            ref={inputRef} autoFocus
            className="mb-2 resize-y focus:outline-none rounded-md mr-5 p-3 w-full bg-gray-50 h-10" placeholder="Введите заголовок" />

          <div className="flex">
            <button
              style={{ width: "200px" }} className="ease-in bg-blue-600 text-blue-50 duration-200 cursor-pointer rounded-md hover:bg-blue-700 p-2 mr-2 ">
              + Добавить колонку
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
            style={{width: "270px"}}
            onClick={() => setIsEdit(true)}
            className="ease-in duration-200 cursor-pointer rounded-md hover:bg-gray-200 p-3 bg-gray-300">
            + Добавить колонку
          </button>
        </div>)
      }
    </>

  )
}

export { ColumnCreate }