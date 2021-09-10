import { ChangeEvent } from 'react';

// clsx
import clsx from 'clsx';

// react hook form
import { UseFormRegister } from 'react-hook-form';

// types
import { ILoginFormInputs } from '@/components/login/LoginForm/types';
import { IRegisterFormInputs } from '@/components/register/RegisterForm/types';

export interface IProps {
  placeholder: string;
  name: keyof ILoginFormInputs | keyof IRegisterFormInputs;
  register: UseFormRegister<ILoginFormInputs | IRegisterFormInputs>;
  errors: any;
  serverError?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(props: IProps) {
  const { placeholder, name, serverError, register, errors, handleChange } =
    props;

  return (
    <div className={clsx('my-4')}>
      <input
        className={clsx(
          'w-full rounded-lg px-4 py-3 text-base outline-none border-2 border-gray-dark',
          'text-light-text'
        )}
        placeholder={placeholder}
        {...register(name)}
        onChange={handleChange}
      />
      <p className={clsx('mt-1', 'text-red')}>
        {serverError ? serverError : errors[name] && errors[name].message}
      </p>
    </div>
  );
}

export default FormInput;
