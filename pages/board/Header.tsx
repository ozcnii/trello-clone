import { FC, useState } from 'react';
import Link from 'next/link';
import { MenuPopout } from './MenuPopover';

const Header: FC = () => {

  const [popover, setPopover] = useState(false);

  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.40)"}} 
      className="absolute top-0 w-full py-2 px-10 flex justify-between items-center">
      <div className='flex items-end'>
        <Link href={'/landing'}>
          <a className='ease-out duration-200 text-blue-50 font-bold text-2xl hover:underline mr-3'>Trello</a>
        </Link>
        <div>
          <button 
            onClick={ () => setPopover(!popover) }
            className='cursor-pointer ease-out duration-1000 text-blue-50 font-bold text-xl hover:underline px-2 '>
            Меню
          </button>
          { popover ? <MenuPopout setPopover={setPopover} /> : null }
        </div>
      </div>

      <div className='flex items-center cursor-pointer text-gray-50'>
        <span className='mr-4 text-lg'>user name</span>
        <div style={{ height: "50px", width: "50px" }} className='rounded-full bg-green-600 flex items-center justify-center font-bold'>Е</div>
      </div>
    </div>
  )
}

export { Header }