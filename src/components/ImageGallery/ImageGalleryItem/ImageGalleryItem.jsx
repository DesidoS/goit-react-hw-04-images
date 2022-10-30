import { GalleryItemImg } from '../Gallery.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../../Modal';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GalleryItemImg
        onClick={() => setShowModal(true)}
        src={webformatURL}
        alt={tags}
      />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          {<img src={largeImageURL} alt={`${tags}`}></img>}
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
