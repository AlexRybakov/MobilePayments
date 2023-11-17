import styled from 'styled-components';

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  gap: 8px;
  max-width: 80%;
  width: 100%;

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(25%, auto));
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;
