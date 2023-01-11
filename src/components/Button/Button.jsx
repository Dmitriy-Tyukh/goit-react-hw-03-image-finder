import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


const ButtonLoadMore = ({ onIncrement }) => {
    return (
      <Button onClick={onIncrement} variant="contained" size="large">
        Load More
      </Button>
    );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};