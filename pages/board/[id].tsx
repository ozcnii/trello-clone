import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { IBackground } from '../../models/board.models';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Header } from '../../components/Board/Header';
import { BoardSlice } from '../../store/Slices/Board/BoardSlice';
import { useRouter } from 'next/router';
import { Columns } from '../../components/Board/Columns/Columns';

const Desk: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentBoardId = useAppSelector(state => state.BoardReducer.currentBoardId);
  const boards = useAppSelector(state => state.BoardReducer.boards);
  const { setCurrentBoardId } = BoardSlice.actions;
  const { setBackground } = BoardSlice.actions;
  const currentBoard = boards.find(board => board.id == currentBoardId);
  const background = currentBoard?.background;
  const { id } = router.query;

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(setCurrentBoardId(id));

      if (localStorage.getItem(currentBoardId)) {
        const bgObject: IBackground = JSON.parse(localStorage.getItem(currentBoardId) || "");
        dispatch(setBackground(bgObject));
      }
    }
  }, [dispatch, currentBoardId, setBackground, setCurrentBoardId, id])

  let className = "min_width-800 h-screen pt-20";

  if (background?.type === "img") {
    className += " [url('/img/${background.background}')]";
  } else {
    className += className += " " + background?.background;
  }

  return (
    currentBoard && typeof id === "string"
      ? (<>
        <Head>
          <title>Trello | Board </title>
        </Head>

        <div className={className}>
          <Header />
          <Columns />
        </div>
      </>)
      : !currentBoard && typeof id === "string" ? (
        <div className='flex justify-center'>
          board with id
          <span className='mx-1 text-blue-700'> {id} </span>
          not defined
        </div>
      ) 
      : null
  )
}

export default Desk