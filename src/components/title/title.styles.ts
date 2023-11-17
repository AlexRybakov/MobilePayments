import styled from 'styled-components';

export const Root = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 24px;
  max-width: 1100px;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;