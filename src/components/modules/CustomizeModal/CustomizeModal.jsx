import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

// استایل‌های سفارشی مودال
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
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

function CustomizeModal({ modalIsOpen, closeModal, items , link , categoryId }) {
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
        <ul className='parent_list_item_category'>
          {items?.map(data => (
            <li key={data.id}>
              <Link to={`/${link}/${categoryId}/${data.id}`}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </ReactModal>
  );
}



export default CustomizeModal;
