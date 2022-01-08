import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { UserSlice } from "../../../store/Slices/User/UserSlice";
import { Button } from "../../Button";
import { LittleButton } from "../../LittleButton";

interface IProps {
  setPopover: (arg: boolean) => void,
}

const AccountPopover: FC<IProps> = ({ setPopover }) => {
  const dispatch = useAppDispatch();
  const { editName } = UserSlice.actions;
  const { logout } = UserSlice.actions;
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const { user } = useAppSelector(state => state.UserReducer);
  const firstLetterOfName = user ? user.name[0].toUpperCase() : null

  const [editMod, setEditMod] = useState(false);

  const editNameHandler = () => {
    const newName = nameRef.current?.value.trim();
    if (newName) {
      dispatch(editName(newName));
      setEditMod(false)
    }
  }

  const logoutHandler = () => {
    dispatch(logout);
    router.push('/auth/login');
  }

  return (
    <>
      <div className="relative">
        <div style={{ top: "20px", right: "-30px", boxShadow: "0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214" }}
          onClick={(event) => event?.stopPropagation()}
          className="popover-animation absolute z-20 bg-gray-200 rounded-md p-2">

          <div className="flex text-gray-600 justify-between mb-3 items-center pl-3">
            <span>Учетная запись</span>
            <LittleButton style={{ height: "40px", width: "40px" }} color="transparent" handler={() => setPopover(false)}>
              <MdClose size={40} />
            </LittleButton>
          </div>

          <div style={{ width: "300px" }}>

            <div className="flex items-center mb-4 px-3">
              <div style={{ height: "50px", width: "50px" }}
                className='text-white mr-3 rounded-full bg-green-600 flex items-center justify-center font-bold'>
                {firstLetterOfName}
              </div>
              <div className="flex flex-col">
                <span className='text-lg'>{user?.name}</span>
                <span className='text-md text-gray-500'> {user?.email} </span>
              </div>
            </div>

            <div className="flex flex-col">
              {editMod
                ? (
                  <div className="mb-2 ease-int duration-200 w-full text-left py-2 px-3 rounded-md">
                    <div className="flex">
                      <input type="text" placeholder="Введите новое имя"
                        ref={nameRef}
                        className="ease-in duration-200 mr-2 w-full px-3 py-2 rounded-md focus:border-2 focus:border-gray-400 outline-none" autoFocus />
                      <div onClick={editNameHandler}>
                        <Button className="text-base">Изменить</Button>
                      </div>
                    </div>

                    <div onClick={() => setEditMod(false)}>
                      <Button className="text-base w-full mt-2">Отмена</Button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setEditMod(true)}
                    className="mb-2 ease-int duration-200 hover:bg-gray-300 w-full text-left py-2 px-3 rounded-md">
                    Изменить имя
                  </button>
                )


              }

              {/* <button className="mb-2 ease-int duration-200 hover:bg-gray-300 w-full text-left py-2 px-3 rounded-md"> Изменить аватар </button> */}

              <button onClick={logoutHandler}
                className="ease-int duration-200 hover:bg-gray-300 w-full text-left py-2 px-3 rounded-md">
                Выйти
              </button>
            </div>
          </div>

        </div>
      </div>

      <div onClick={(e) => {
        e.stopPropagation()
        setPopover(false)
      }} className='cursor-default z-10 absolute h-screen bg-transparent top-0 right-0 left-0 bottom-0'>
      </div>
    </>
  )
}

export { AccountPopover }