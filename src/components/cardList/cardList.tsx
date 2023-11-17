'use client';

import { Operator } from '@/data/mockData';
import Card from '@/components/card';
import { Root } from './cardList.styles';

interface ICardListProps {
  data: Operator[];
}

const CardsList = ({ data }: ICardListProps) => {
  return (
    <Root>
      {data.map((dataItem, index) => (
        <Card key={index} {...dataItem} />
      ))}
    </Root>
  );
};

export default CardsList;
