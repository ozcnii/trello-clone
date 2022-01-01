import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppSelector } from '../../store/hooks';
import { Columns } from './Columns/Columns';
import { Header } from './Header';

const Desk: NextPage = () => {
  const { background } = useAppSelector(state => state.BoardReducer)
  let className = "h-screen pt-20"
  
  if (!background.isImage) {
    className += ` bg-${background.background}`
  } else {
    className += ` bg-[url('/img/${background.background}')]`
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
