'use client';

import { ReactNode } from 'react';
import { Root } from './wrapper.styles';

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => <Root>{children}</Root>;

export default Wrapper;
