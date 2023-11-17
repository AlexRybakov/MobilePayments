import CardsList from '@/components/cardList';
import Title from '@/components/title';
import { data } from '@/data/mockData';
import Wrapper from '@/components/wrapper';

export default function Index() {
  return (
    <Wrapper>
      <Title />
      <CardsList data={data} />
    </Wrapper>
  );
}
