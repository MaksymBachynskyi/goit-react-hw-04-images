import Modal from 'react-modal';
Modal.setAppElement('#root');
export const ModalEl = ({ modalIsOpen, largeImage, onToogelModal }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => onToogelModal(false)}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifycontent: 'center',
        alignitems: 'center',
      },
      content: {
        top: '50%',
        left: '50%',
        width: '50vw',
        border: 0,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
      },
    }}
  >
    <img src={largeImage} alt="" />
  </Modal>
);
