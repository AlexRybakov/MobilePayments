import Link from 'next/link';

import { getPathByOperatorName } from '@/utils';
import { Operator } from '@/data/mockData';
import { Root, CardTitle, Arrow, Image } from './card.styles';

interface Props extends Operator {}

const Card = ({ logo, title, name }: Props) => {
  const path = getPathByOperatorName(name);

  return (
    <Link href={path}>
      <Root>
        <CardTitle>
          {title}
          <Arrow>-&gt;</Arrow>
        </CardTitle>
        <Image src={logo.src} alt={name} />
      </Root>
    </Link>
  );
};

export default Card;
