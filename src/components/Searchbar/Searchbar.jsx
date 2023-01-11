import { SearchbarStyle } from './Searchbar.styled'
import SearchForm from '../SearchForm'


const Searchbar = ({...otherProps}) => {
  return (
    <SearchbarStyle>
      <SearchForm {...otherProps} />
    </SearchbarStyle>
  );
};

export default Searchbar;