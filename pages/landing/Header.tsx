import { FC } from 'react';
import { Button } from '../../components/Button';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className="z-10 sticky top-0 w-100 bg-gray-300 flex justify-between py-3 px-8 items-center" >
      <Link href={'/landing'}>
        <a className='text-blue-500 font-bold text-2xl pr-5'>Trello</a>
      </Link>

      <div>
        <button className='ease-out duratioyan-200 text-blue-500 text-xl mr-5 hover:text-blue-600 hover:underline' >
          Войти
        </button>

        <Button> Регистрация </Button>
      </div>

    </div >
  )
}

export { Header };