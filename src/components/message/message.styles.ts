import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const text = css`
  font-size: 20px;

  @media only screen 
  and (min-device-width : 1200px) 
  and (max-device-width : 1400px) {
    font-size: 11px;
  }

  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1200px) {
    font-size: 15px;
  }

  @media only screen 
  and (min-device-width : 480px) 
  and (max-device-width : 768px) {
    font-size: 14px;
  }

  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    font-size: 20px;
  }
`;

export const PositiveText = styled.p`
  ${text};
  color: green;
`;

export const NegativeText = styled.p`
  ${text};
  color: red;
`;

export const Hint = styled.p`
  color: #666;
  font-size: 16px;
  margin-top: 6px;

  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1200px) {
    font-size: 15px;
  }

  @media only screen 
  and (min-device-width : 480px) 
  and (max-device-width : 768px) {
    font-size: 12px;
  }

  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    font-size: 10px;
  }
`;
