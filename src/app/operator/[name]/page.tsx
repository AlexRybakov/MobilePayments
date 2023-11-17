import PaymentContainer from '@/components/paymentContainer';
import { operators } from '@/constants';
import { data } from '@/data/mockData';

const getOperatorByName = (name: string) =>
  data.find((item) => item.name === name);

export const dynamicParams = false;

interface Props {
  params: {
    name: string;
  };
}

export default function Operator({ params: { name } }: Props) {
  return <PaymentContainer operator={getOperatorByName(name)} />;
}

export async function generateStaticParams() {
  return operators.map((operator) => ({
    name: operator,
  }));
}
