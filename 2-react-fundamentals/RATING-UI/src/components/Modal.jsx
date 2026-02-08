import Button from "./Button";
const Modal = (isopen, onClose, rating) => {
  if (!isopen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You </h2>
        <p>
          you rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        {/* <button className="close-btn" onClick={onClose}>
          Close
        </button>*/}

        <Button onClick={onClose} className="close-btn">
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
