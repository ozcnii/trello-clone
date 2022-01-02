import { FC } from 'react';

interface IProps {
  setPopover: (arg: boolean) => void,
  removeColumn: () => void
}

const ColumnPopover: FC<IProps> = ({ removeColumn, setPopover }) => {
  return (
    <>
      <div className='relative z-20 cursor-default'>
        <div
          style={{ top: "-15-px", left: "-30px", width: "200px", boxShadow: "0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214" }}
          className='p-3 flex-col absolute rounded-md bg-gray-200 flex justify-center items-center'>

          <div>
            <span>Действия с колокной</span>
          </div>

          <div className='mt-3'>

            <button onClick={removeColumn} className='ease-out duration-200 mr-2 bg-red-400 py-2 px-3 rounded-md hover:bg-red-500'>Удалить</button>
            <button onClick={(e) => {
              e.stopPropagation()
              setPopover(false)
            }}
              className='ease-out duration-200 bg-green-400 py-2 px-3 rounded-md hover:bg-green-500'>Отмена</button>
          </div>
        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        setPopover(false)
      }} className='cursor-default z-10 absolute bg-transparent top-0 right-0 left-0 bottom-0'></div>
    </>
  )
}

export { ColumnPopover }