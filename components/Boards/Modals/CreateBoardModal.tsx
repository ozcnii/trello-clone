import React, { FC, useRef } from 'react'
import { MdClose } from 'react-icons/md'
import { Button } from '../../Button'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { BoardSlice } from '../../../store/Slices/Board/BoardSlice'

interface IProps {
  setModal: (arg: boolean) => void,
}

const CreateBoardModal: FC<IProps> = ({ setModal }) => {
  const { createBoard } = BoardSlice.actions;
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const authorId = useAppSelector(state => state.UserReducer.user?.id);

  const create = () => {
    const value = inputRef.current?.value;

    if (value?.trim().length) {
      const boardName = value.trim();

      if (authorId && inputRef.current) {
        dispatch(createBoard({ name: boardName, authorId }))
        setModal(false)
        inputRef.current.value = "";
      }
    }
  }

  return (
    <>
      <div className='min_width-800 modal_position-center'>
        <div onClick={(e) => e.stopPropagation()}
          className='modal_show_animation z-20 absolute bg-gray-200 p-4 rounded-md'>

          <div className='flex justify-between items-center mb-4'>
            <span className='mr-5 text-lg'>Создание нового рабочего постранства</span>
            <div onClick={() => setModal(false)}
              className='ease-out duration-200 cursor-pointer z-20 text-gray-800 hover:text-black rounded-xl'>
              <MdClose size={24} />
            </div>
          </div>

          <div className='flex'>
            <input ref={inputRef} type="text"
              placeholder='Введите заголовок доски'
              className='focus:border-gray-700 focus:outline-none w-full border-2 border-gray-400 px-3 py-2 rounded-md mr-3' />
            <div onClick={create}>
              <Button>Создать</Button>
            </div>
          </div>

        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        setModal(false)
      }} style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
        className='min_width-800 modal_background-show cursor-default z-10 absolute h-screen bg-transparent top-0 right-0 left-0 bottom-0'>
      </div>
    </>
  )
}


export { CreateBoardModal }
