import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { Overlay, ModalStyle } from './Modal.style';

class Modal extends PureComponent {
static propTypes = {
  closeModal: PropTypes.func.isRequired,
};
  handleCloseModal = event => {
    const { closeModal } = this.props;
    
    if (event.currentTarget === event.target || event.code === 'Escape') {
    closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
    }
    
  render() {
      const { children } = this.props;
      
    return ReactDOM.createPortal(
      <Overlay onClick={this.handleCloseModal}>
        <ModalStyle>
            {children}
        </ModalStyle>
      </Overlay>,
      document.querySelector('#modal-root')
    ); 
  }
};

export default Modal;