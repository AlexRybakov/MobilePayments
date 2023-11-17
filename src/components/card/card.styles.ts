import styled from 'styled-components';

export const Arrow = styled.span`
  display: inline-block;
  transition: transform 200ms;
  color: inherit;
  text-decoration: none;
  padding-left: 6px;
`;

export const Root = styled.span`
  display: block;
  padding: 16px 18px;
  height: 100%;
  border-radius: 12px;
  background: rgba(169, 169, 169, 0);
  border: 1px solid rgba(128, 0, 128, 0);
  transition: background 200ms, border 200ms;
  background-color: snow;

  &:hover {
    background: rgba(169, 169, 169, 0.1);
    border: 1px solid rgba(128, 0, 128, 0.15);

    ${Arrow} {
      transform: translateX(10px);
    }
  };

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 16px;

  @media screen 
  and (min-width: 480px) 
  and (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }

  @media screen 
  and (min-width: 280px) 
  and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const CardTitle = styled.span`
  display: block;
  font-weight: 400;
  margin-bottom: 8px;
  color: #333;
  font-size: 24px;

  @media screen 
  and (min-width: 480px) 
  and (max-width: 1200px) {
    font-size: 16px;
    font-weight: 500;
  }

  @media screen 
  and (min-width: 280px) 
  and (max-width: 480px) {
    font-size: 12px;
  }
`;
