import BookingModal from "./BookingModal";

const Modal = (props) => {

    const currentOffer = props.currentOffer
    
    return (
        <div className="modalNew" onClick={props.handleModalClick}>
            <div className="modal-content-new">
                <span className="close" onClick={props.closeModal}>
                    &times;
                </span>
                <BookingModal closeModal={props.closeModal} currentOffer={currentOffer}/>
            </div>
        </div>
    );
}

export default Modal;