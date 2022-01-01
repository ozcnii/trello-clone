import { FC } from 'react';

import Image from 'next/image';
import { Button } from '../../components/Button';

const BeginContent: FC = () => {
  return (
    <>
      <div style={{ width: "70%" }} className='text-sky-900 mx-auto pt-40 pb20 flex flex-col align-center '>
        <span className='text-center text-3xl font-bold'>Это не просто работа. Это координация действий в команде.</span>
        <span className='text-center my-5 text-xl'>Начните с досок, колонок и карточек, а затем переходите к более сложным функциям. Управляйте проектами, упорядочивайте задачи и поддерживайте командный дух — все это в Trello.</span>

        <div className="flex justify-center">
          <Button className="w-60" outline={true}>
            Начать работу →
          </Button>
        </div>

        <div style={{ width: '100%', height: '600px', position: 'relative' }} className='mt-10 flex justify-center'>
          <Image objectFit="contain" layout="fill" src="/images/board.png" alt='board-image' />
        </div>
      </div>
    </>
  )
}

export { BeginContent };