import { useEffect } from 'react';
import {
  Root,
  Wrapper,
  PositiveText,
  NegativeText,
  Hint,
} from './message.styles';

interface Props {
  result: boolean;
  onClose: () => void;
  duration?: number;
}

const DEFAULT_DURATION = 2000;

const Message = ({ result, onClose, duration }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, duration || DEFAULT_DURATION);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Root>
      {result ? (
        <Wrapper>
          <PositiveText>Успешно!</PositiveText>
          <Hint>Вы будете перенаправлены на главную страницу</Hint>
        </Wrapper>
      ) : (
        <NegativeText>Ошибка! Попробуйте снова!</NegativeText>
      )}
    </Root>
  );
};

export default Message;
