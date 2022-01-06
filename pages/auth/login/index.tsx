import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SyntheticEvent } from 'react'
import { Button } from '../../../components/Button'
import firstImage from './../../../public/images/auth-bg_1.jpg';
import secondImage from './../../../public/images/auth-bg_2.jpg'

const Login: NextPage = () => {
  const submitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log('login');
  }

  return (
    <>
      <Head>
        <title>Trello | Login</title>
      </Head>

      <div className='flex flex-col items-center'>
        <h1 className='text-3xl my-10 font-bold text-blue-900'>Trello</h1>

        <div style={{ width: "330px", boxShadow: "rgb(0 0 0 / 10%) 0px 0px 10px" }}
          className='rounded-md z-20 bg-white flex p-4 flex-col items-center'>
          <h3 className='text-gray-700 font-bold'>Войдите чтобы продолжить</h3>

          <form className='z-20' onSubmit={submitHandler}>
            <input className='ease-in duration-200 hover:bg-gray-200 focus:border-blue-400 focus:bg-white outline-none w-full my-3 rounded-md border-gray-300 border-2 px-3 py-2' type="email" placeholder='Введите адрес электронной почты' required />
            <input className='ease-in duration-200 hover:bg-gray-200 focus:border-blue-400 focus:bg-white w-full mb-3 outline-none rounded-md border-gray-300 border-2 px-3 py-2' placeholder='Введите пароль' required />

            <div className='w-full'>
              <Button className='w-full'> Войти  </Button>
            </div>
          </form>

          <div>
            <Link href="register">
              <a className='flex mt-3 text-blue-500 ease-in duration-200 hover:underline'>
                Регистрация аккаунта
              </a>
            </Link>
          </div>
        </div>

        <div style={{ bottom: "-100px" }} 
          className='absolute z-10 bottom-0 right-0 left-5'>
          <div className='flex justify-between'>
            <Image width={250} objectFit='contain' src={secondImage} alt='' />
            <Image width={300} objectFit='contain' src={firstImage} alt='' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Login