import { FC } from 'react';
import { Button } from '../../Button';


const RegisterContent: FC = () => {
  return (
    <>
      <div style={{ width: "70%" }} className='text-sky-900 mx-auto py-40 flex flex-col align-center '>
        <span className='text-center text-3xl font-bold'>Trello помогает командам эффективно решать рабочие задачи.</span>
        <span className='text-center my-5 text-xl'>Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Trello.</span>

        <div className='flex align-center justify-center'>
          <input type="email" className='px-3 py-2 rounded-md mr-3 border-gray-300 border-2 focus:outline-none' placeholder="Электронная почта" />
          <Button>Зарегистрируйтесь - это беспалтно!</Button>
        </div>
      </div>
    </>
  )
}

export { RegisterContent };