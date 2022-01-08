import { FC, useState } from 'react';
import Link from 'next/link';
import { MenuPopover } from './Menu/MenuPopover';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BoardsPopover } from './Boards/BoardsPopover';
import { AccountPopover } from './Account/AccountPopover';
import { useAppSelector } from '../../store/hooks';

const Header: FC = () => {

  const [menuPopover, setMenuPopover] = useState(false);
  const [boardsPopover, setBoardsPopover] = useState(false);
  const [accountPopover, setAccountPopover] = useState(false);
  
  const userName = useAppSelector(state => state.UserReducer.user?.name);
  const firstLetterOfName = userName ? userName[0].toUpperCase(): null 

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }}
      className="min_width-800 absolute top-0 w-full py-2 px-10 flex justify-between items-center">
      
      <div className='flex items-center'>
        <Link href={'/boards'}>
          <a className='board_header-button-hover mr-2 text-2xl rounded-md flex items-center cursor-pointer ease-out duration-200 text-blue-50 font-bold px-3 py-2'>Trello</a>
        </Link>

        <div>
          <button
            onClick={() => setBoardsPopover(true)}
            className={` ${boardsPopover ? 'board_header-button' : ''} board_header-button-hover mr-2 rounded-md flex items-center cursor-pointer ease-out duration-200 text-blue-50 font-bold text-xl px-3 py-2 `}>
            <span>Рабочие простарнства</span> <MdKeyboardArrowDown size={30} />
          </button>
          {boardsPopover ? <BoardsPopover setPopover={setBoardsPopover} /> : null}
        </div>

        <div>
          <button
            onClick={() => setMenuPopover(true)}
            className={` ${menuPopover ? 'board_header-button' : ''} board_header-button-hover rounded-md flex items-center cursor-pointer ease-out duration-200 text-blue-50 font-bold text-xl px-3 py-2`}>
            <span>Меню</span> <MdKeyboardArrowDown size={30} />
          </button>
          {menuPopover ? <MenuPopover setPopover={setMenuPopover} /> : null}
        </div>

      </div>

      <div>
        <div onClick={() => setAccountPopover(true)}
          className='flex items-center cursor-pointer text-gray-50'>
          <span className='mr-4 text-lg'>{ userName }</span>
          <div style={{ height: "50px", width: "50px" }} className='rounded-full bg-green-600 flex items-center justify-center font-bold'>
            { firstLetterOfName }
          </div>
        </div>
        {accountPopover ? <AccountPopover setPopover={setAccountPopover} /> : null}
      </div>

    </div>
  )
}

export { Header }