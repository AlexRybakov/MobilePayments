'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import IMask from 'imask';

import { IPaymentForm } from '@/types';
import { Button } from '@/global.styles';
import Loader from '@/components/loader';
import { Root, FieldWrapper, Label, Input, Error } from './paymentForm.styles';

interface Props {
  onConfirm: (data: IPaymentForm) => void;
  loading: boolean;
}

const PaymentForm = ({ onConfirm, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPaymentForm>({
    mode: 'onBlur',
    defaultValues: { text: '', sum: '' },
  });
  const onSubmit = handleSubmit(onConfirm);

  const phoneParams = register('text', {
    required: {
      value: true,
      message: 'Обязательное поле',
    },
    pattern: {
      value: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
      message: 'Введите корректный номер телефона',
    },
  });

  const sumParams = register('sum', {
    required: {
      value: true,
      message: 'Введите сумму пополнения',
    },
    minLength: { value: 1, message: 'Введите сумму пополнения' },
    // maxLength: { value: 3, message: 'Превышена максимальная сумма' },
    pattern: {
      value: /^([1-9][0-9]{0,2}|1000)$/,
      message: 'Сумма пополнения от 1Р до 1000Р',
    },
  });

  useEffect(() => {
    const element = document.getElementById('phone');
    if (element) {
      IMask(element, {
        mask: '+{7}(000)000-00-00',
      });
    }
    const elementSum = document.getElementById('sum');
    if (elementSum) {
      IMask(elementSum, {
        mask: '0000',
      });
    }
  }, []);

  return (
    <Root onSubmit={onSubmit}>
      <FieldWrapper>
        <Label htmlFor='phone' className={classnames({ hasError: errors.text })}>
          Номер телефона
        </Label>

        <Input
          id='phone'
          {...phoneParams}
          className={classnames({ hasError: errors.text })}
          type='text'
          placeholder='Введите ваш номер телефона'
        />

        {errors.text && <Error>{errors.text.message}</Error>}
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor='sum' className={classnames({ hasError: errors.sum })}>
          Сумма в рублях
        </Label>

        <Input
          id='sum'
          className={classnames({ hasError: errors.sum })}
          {...sumParams}
          type='text'
          placeholder='от 1р до 1000р'
        />

        {errors.sum && <Error>{errors.sum.message}</Error>}
      </FieldWrapper>

      <Button type='submit' disabled={loading}>
        {loading ? <Loader size={36} /> : null}
        Оплатить
      </Button>
    </Root>
  );
};

export default PaymentForm;
