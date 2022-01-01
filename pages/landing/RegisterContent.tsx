import { FC } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const RegisterContent: FC = () => {
  return (
    <>
      <div style={{ width: "70%" }} className='text-sky-900 mx-auto py-40 flex flex-col align-center '>
        <span className='text-center text-3xl font-bold'>Trello помогает командам эффективно решать рабочие задачи.</span>
        <span className='text-center my-5 text-xl'>Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Trello.</span>

        <div className='flex align-center justify-center'>
          <Input type="email" placeholder="Электронная почта" />
          <Button>Зарегистрируйтесь - это беспалтно!</Button>
        </div>
      </div>
    </>
  )
}

export { RegisterContent };