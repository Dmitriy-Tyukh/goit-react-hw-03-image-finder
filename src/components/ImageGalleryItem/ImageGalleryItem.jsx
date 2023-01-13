import PropTypes from 'prop-types';
import { Fragment, PureComponent } from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

class GalleryItem extends PureComponent {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
};

  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { largeImageURL, webformatURL, user } = this.props;
    const { isOpen } = this.state;
    const toggleModal = this.toggleModal;

    return (
      <Fragment>
        <Item onClick={toggleModal}>
          <ItemImage src={webformatURL} alt={user} loading="lasy" />
        </Item>

        {isOpen && (
          <Modal closeModal={toggleModal}>
            <img src={largeImageURL} alt={user} />
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default GalleryItem;