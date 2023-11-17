'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Operator, commitPaymentRequest } from '@/data/mockData';
import { IPaymentForm } from '@/types';
import { mainPath } from '@/routes';
import { ButtonLink } from '@/global.styles';
import PaymentForm from '@/components/paymentForm';
import Message from '@/components/message';
import { Root, Image } from './paymentContainer.styles';

interface Props {
  operator: Operator | undefined;
}

const NAVIGATE_DELAY = 2000;

const PaymentContainer = ({ operator }: Props) => {
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const router = useRouter();

  const handleHideMessage = useCallback(() => {
    setShowMessage(false);
  }, []);

  const handleError = useCallback(() => {
    // TODO handling error
  }, []);

  const handleConfirmPayment = useCallback(async (data: IPaymentForm) => {
    setLoading(true);

    try {
      const result = await commitPaymentRequest(data);
      setPaymentResult(result);
    } catch (error) {
      handleError();
    } finally {
      setShowMessage(true);
      setLoading(false);
    }
  }, []);

  const handleNavigateToMain = useCallback(() => {
    setTimeout(() => {
      router.push(mainPath);
    }, NAVIGATE_DELAY);
  }, []);

  useEffect(() => {
    if (paymentResult) {
      handleNavigateToMain();
    }
  }, [paymentResult]);

  if (!operator) {
    return null;
  }

  return (
    <>
      <Root>
        <Image src={operator.logo.src} alt={operator.name} />
        <PaymentForm loading={loading} onConfirm={handleConfirmPayment} />
        <Link href='/' passHref legacyBehavior>
          <ButtonLink>На главную</ButtonLink>
        </Link>
      </Root>
      {showMessage && (
        <Message
          result={paymentResult}
          onClose={handleHideMessage}
          duration={1500}
        />
      )}
    </>
  );
};

export default PaymentContainer;
