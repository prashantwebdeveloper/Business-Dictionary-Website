import React from 'react';
import Modal from 'react-bootstrap/Modal';

const DeleteOffers = ({ show, handleClose, handleDelete}) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Delete Offers</h5>
            </div>
            <div className="modal-body">
                <p>Are you sure you want to delete this Offers?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="main-btn close-btn" onClick={handleClose}>
                    Close
                </button>
                <button
                    type="button"
                    className={`main-btn btn-hover delete-btn`}
                    onClick={handleDelete}
                >
                    {/* {isDeleteLoading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>} */}
                    {/* isDeleteLoading ? 'Deleting...' : 'Delete' */}

                    Delete
                </button>
            </div>
        </Modal>
    );
}

export default DeleteOffers;
