import { nanoid } from 'nanoid';
import { Gallery, GalleryItem, GalleryItemPar } from './Gallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ content }) => {
  return (
    <>
      <Gallery>
        {content.map(({ webformatURL, largeImageURL, tags }) => (
          <GalleryItem key={nanoid()}>
            <ImageGalleryItem
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
            <GalleryItemPar>{tags.toUpperCase()}</GalleryItemPar>
          </GalleryItem>
        ))}
      </Gallery>
    </>
  );
};

export default ImageGallery;

ImageGalleryItem.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
