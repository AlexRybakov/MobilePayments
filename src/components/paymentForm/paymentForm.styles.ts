import styled from 'styled-components';

export const Root = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  font-size: 26px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 700;
  border-color: blue;

  &.hasError {
    border-color: red;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 12px;
  background-color:white;
  color: #656EC2;
  font-size: 16px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  border-radius: 8px;
  border-color: white;
  box-shadow: 0px 7px 25px rgba(100, 100, 111, 0.20);
  margin-top: 15px;
  margin-bottom: 15px;

  &.hasError {
    border-color: red;
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

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  align-items: start;

  @media only screen 
  and (min-device-width : 1200px) 
  and (max-device-width : 1400px) {
    text-indent: 112px;
  }

  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1200px) {
    text-indent: 70px;
  }

  @media only screen 
  and (min-device-width : 480px) 
  and (max-device-width : 768px) {
    text-indent: 45px;
  }

  @media only screen 
  and (min-device-width : 320px) 
  and (max-device-width : 480px) {
    text-indent: 40px;
  }
`;
