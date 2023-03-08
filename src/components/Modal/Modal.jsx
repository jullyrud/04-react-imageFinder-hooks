
import PropTypes from 'prop-types';
import { Modal, Overlay } from './Modal.styled'
import { useEffect } from 'react';

export function ModalWindow ({closeModal, onModalClick, data}) {
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleKeyDown (e) 
         {
            if(e.code === 'Escape'){
             closeModal()
            }
   }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])
    
   return (
        <Overlay onClick={(evt) => {onModalClick(evt)}}>
            <Modal >
                    <img src={data.largeImageURL} alt={data.largeImageURL} />
            </Modal>
        </Overlay>
    )
    
}

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onModalClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
