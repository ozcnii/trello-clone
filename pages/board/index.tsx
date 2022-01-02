import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { IBackground } from '../../models/board.models';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Columns } from './Columns/Columns';
import { Header } from './Header';
import { BoardSlice } from './Slices/BoardSlice';

const Desk: NextPage = () => {
  const { background } = useAppSelector(state => state.BoardReducer);
  const dispatch = useAppDispatch();
  const { setBackground } = BoardSlice.actions;
  
  let className = "h-screen pt-20"
  
  useEffect(() => {

    if (localStorage.getItem('background')) {
      const bgObject: IBackground = JSON.parse(localStorage.getItem('background') || "");
      dispatch(setBackground(bgObject));
    }
  }, [setBackground, dispatch]);

  if (background.type === "img") {
    className += " " + "[url('/img/${background.background}')]";
  } else {
    className += className += " " + background.background;
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
