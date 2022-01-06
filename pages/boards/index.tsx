import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { BoardSlice } from '../../store/Slices/Board/BoardSlice'
import { CreateBoardModal } from '../../components/Boards/Modals/CreateBoardModal'
import { Header } from '../../components/Boards/Header'
import { MdClose } from 'react-icons/md'

const Boards: NextPage = () => {
  const dispatch = useAppDispatch();
  const { setCurrentBoardId } = BoardSlice.actions;
  const { boards } = useAppSelector(state => state.BoardReducer)
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const { removeBoard } = BoardSlice.actions;

  const removeHandler = (event: SyntheticEvent<EventTarget>, boardId: string) => {
    event.preventDefault();
    dispatch(removeBoard(boardId));
  }

  useEffect(() => {
    dispatch(setCurrentBoardId('_null'))
  }, [dispatch, setCurrentBoardId])

  return (
    <>
      <Head>
        <title>Trello | Boards </title>
      </Head>


      <div>
        <Header />

        <div className='min_width-800 pt-20 px-10'>
          <div className='mb-3'>
            <span className='font-bold flex mb-3 text-gray-700'>ВАШИ РАБОЧИЕ ПРОСТРАНСТВА</span>

            <div className='flex max-w-fit overflow-x-auto p-2'>
              {boards.map(board => (
                <div key={board.id} className='flex mr-3'>
                  <Link href={`/board/${board.id}`}>
                    <a className={`${board.background.background} z-10 relative rounded-md flex h-24 w-40 justify-center items-center ease-out hover:contrast-125 hover:scale-110 duration-200`}>
                      <span>{board.name}</span>
                      <div onClick={e => removeHandler(e, board.id)}
                        className='z-20 board_remove-button ease-in rounded-md p-2 duration-200 text-gray-900 hover:text-black absolute top-1 right-1'>
                        <MdClose />
                      </div>
                    </a>
                  </Link>
                </div>
              ))}

            </div>
          </div>

          <div>
            <span className='font-bold flex mb-3 text-gray-700'>СОЗДАЙТЕ ЕЩЕ ОДНО РАБОЧЕЕ ПРОСТАРНСТВО ПРОСТРАНСТВО</span>
            <button onClick={() => setCreateBoardModal(true)}
              className="bg-gray-300 mx-2 rounded-md flex h-24 w-40 justify-center items-center ease-out hover:bg-gray-400 duration-200">
              Создать
            </button>

            {createBoardModal ? <CreateBoardModal setModal={setCreateBoardModal} /> : null}
          </div>
        </div>

      </div>
    </>
  )
}

export default Boards