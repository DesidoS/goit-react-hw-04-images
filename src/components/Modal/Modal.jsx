import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ children, toggleModal }) => {
  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        return toggleModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <Overlay onClick={onClickClose}>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>,
    modalRoot
  );
};
export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
