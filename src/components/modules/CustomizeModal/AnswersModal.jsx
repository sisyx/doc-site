import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactModal from 'react-modal';
import AddQuestion from '../../templates/ServicesDetails/AddQuestion/AddQuestion';


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // پس‌زمینه تیره برای overlay
    zIndex: 1000, // اولویت بیشتر برای نمایش
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '20px',
    border: 'none',
    maxWidth: '700px',
    width: '90%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

function AnswersModal({ modalIsOpen, closeModal}) {
  return (
    <ReactModal
      closeTimeoutMS={200}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Custom Modal"
    >
      <div className='customize_modal'>
        <button className='close_modal' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <AddQuestion isPrivateForDoctor={true} />
      </div>
    </ReactModal>
  );
}



export default AnswersModal;
