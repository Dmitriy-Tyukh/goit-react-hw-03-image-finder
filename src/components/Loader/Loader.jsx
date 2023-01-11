import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

const Loader = () => {
    return (
      <LoaderStyle>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="64"
          visible={true}
        />
      </LoaderStyle>
    );
}

export default Loader;