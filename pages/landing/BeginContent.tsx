import { FC } from 'react';
import boardImage from './../../public/images/board.png';
import Image from 'next/image';
import { Button } from '../../components/Button';
import Link from 'next/link';

const BeginContent: FC = () => {
  return (
    <>
      <div style={{ width: "70%" }} className='text-sky-900 mx-auto pt-40 pb20 flex flex-col align-center '>
        <span className='text-center text-3xl font-bold'>Это не просто работа. Это координация действий в команде.</span>
        <span className='text-center my-5 text-xl'>Начните с досок, колонок и карточек, а затем переходите к более сложным функциям. Управляйте проектами, упорядочивайте задачи и поддерживайте командный дух — все это в Trello.</span>

        <div className="flex justify-center">
          <Link href={'/boards'}>
            <a><Button className="w-60" outline={true}>
              Начать работу →
            </Button></a>
          </Link>
        </div>

        <div style={{ width: '100%', height: '700px' }} className='relative mt-10 flex justify-center'>
          <Image placeholder="blur" objectFit="contain" layout="fill" src={boardImage} alt='board-image' />
        </div>
        
      </div>
    </>
  )
}

export { BeginContent };