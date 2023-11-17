import { ColorRing } from 'react-loader-spinner';

import { Root } from './loader.styles';

const DEFAULT_SIZE = 80;

interface Props {
  size?: number;
}

const Loader = ({ size = DEFAULT_SIZE }: Props) => {
  return (
    <Root>
      <ColorRing
        visible={true}
        height={size}
        width={size}
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Root>
  );
};

export default Loader;
