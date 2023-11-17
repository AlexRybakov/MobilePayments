'use client';

import type { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import 'inter-ui/inter.css';

const GlobalStyle = createGlobalStyle`
  html, body, p {
    padding: 0;
    margin: 0;
    font-family: "Inter var", system-ui;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

interface Props {
  children: ReactNode;
}

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default ClientLayout;
