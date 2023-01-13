import PropTypes from 'prop-types';
import {ImageList} from './ImageGallery.styled'
import GalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ onSubmit }) => {
  return (
    <ImageList>
      {onSubmit.map(({ id, webformatURL, largeImageURL, user }) => (
        <GalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          user={user}
        />
      ))}
    </ImageList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.object).isRequired,
};