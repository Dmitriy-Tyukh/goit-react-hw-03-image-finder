// import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const ButtonLoadMore = ({ onIncrement }) => {
    return (
      //   <LoadMoreBtnStyled type="button" onClick={onClick} hidden="hidden">
      //     Load more
      //   </LoadMoreBtnStyled>

      <ButtonStyled type="button" onClick={onIncrement} hidden="hidden">
     Load more 
      </ButtonStyled>
    );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};