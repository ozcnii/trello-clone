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

  useEffect(() => {
    const { id } = router.query;
    console.log(id);
    
    if (typeof id === 'string') {
      dispatch(setCurrentBoardId(id));

      if (localStorage.getItem(currentBoardId)) {
        const bgObject: IBackground = JSON.parse(localStorage.getItem(currentBoardId) || "");
        dispatch(setBackground(bgObject));
      }
    }
  }, [dispatch, currentBoardId, setBackground, router.query, setCurrentBoardId])

  if (!currentBoard) {
    return (
      <>
        board with id {currentBoardId} is not defined
      </>
    )
  }

  let className = "h-screen pt-20";

  if (background?.type === "img") {
    className += " [url('/img/${background.background}')]";
  } else {
    className += className += " " + background?.background;
  }

  return (
    <>
      <Head>
        <title>Trello | Board </title>
      </Head>

      <div className={className}>
        <Header />
        <Columns />
      </div>
    </>
  )
}

export default Desk