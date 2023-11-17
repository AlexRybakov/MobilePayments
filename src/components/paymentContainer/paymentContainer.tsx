'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [error, setError] = useState<string>();

  const router = useRouter();

  const handleHideMessage = () => setShowMessage(false);

  const handleConfirmPayment = async (data: IPaymentForm) => {
    setLoading(true);
    setError(undefined);

    try {
      const result = await commitPaymentRequest(data);
      setPaymentResult(result);
    } catch (error: any) {
      setError(error);
    } finally {
      setShowMessage(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!paymentResult) {
      return;
    }

    const timeoutId = setTimeout(() => {
      router.push(mainPath);
    }, NAVIGATE_DELAY);

    return () => clearTimeout(timeoutId);
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
          error={error}
          onClose={handleHideMessage}
          duration={1500}
        />
      )}
    </>
  );
};

export default PaymentContainer;
