import { FC, useState } from 'react';
import Link from 'next/link';
import { MenuPopout } from './MenuPopout';


const Header: FC = () => {
  
  const [popout, setPopout] = useState(false);

  return (
    <div className="absolute top-0 w-full bg-gray-400 py-2 px-10 flex justify-between items-center">
      <div className='flex items-end'>
        <Link href={'/boards'}>
          <a className='ease-out duration-200 text-blue-50 font-bold text-2xl hover:underline mr-5'>Trello</a>
        </Link>
        <div>
          <button 
            onClick={ () => setPopout(!popout) }
            className='cursor-pointer ease-out duration-1000 text-blue-50 font-bold text-xl hover:underline px-2 '>
            Menu
          </button>
          { popout ? <MenuPopout setPopout={setPopout} /> : null }
        </div>
      </div>

      <div className='flex items-center'>
        <input type="text" className='mr-5 h-full p-2 rounded-md focus:outline-none' placeholder='Поиск...' />
        <div style={{ height: "50px", width: "50px" }} className='rounded-full bg-green-600 flex items-center justify-center font-bold'>Е</div>
      </div>
    </div>
  )
}

export { Header }