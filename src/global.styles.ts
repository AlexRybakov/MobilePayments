import styled, { css } from 'styled-components';

const buttonCss = css`
  width: 100%;
  color: black;
  position: relative;
  display: inline-block;
  outline: none;
  border: 0;
  cursor: pointer;
  min-width: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px 20px;
  font-size: 20px;
  letter-spacing: 1px;
  box-shadow: inset 10px 10px 10px rgba(49, 77, 78, 0.05),
    15px 25px 10px rgba(49, 77, 78, 0.05),
    15px 20px 20px rgba(49, 77, 78, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  transition: box-shadow 0.5s;
  text-align: center;

  &:hover {
    box-shadow: none;
  }

  @media only screen 
  and (min-device-width : 1200px) 
  and (max-device-width : 1400px) {
    width: 50%;
    font-size: 11px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
    text-indent: 18px;
  }

  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1200px) {
    width: 70%;
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
    text-indent: 18px;
  }

  @media only screen 
  and (min-device-width : 480px) 
  and (max-device-width : 768px) {
    width: 80%;
    font-size: 14px;
    text-indent: 18px;
  }

  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    width: 80%;
    font-size: 14px;
    text-indent: 18px;
  }
`;

export const Button = styled.button`
  ${buttonCss};
`;

export const ButtonLink = styled.a`
  ${buttonCss};

  &:hover {
    box-shadow: none;
  }

  text-decoration: none;
  color: 	black;
`;

