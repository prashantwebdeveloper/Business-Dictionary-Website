import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Logout = ({ show, handleClose, handleLogOut}) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">SignOut</h5>
            </div>
            <div className="modal-body">
                <p>Are you sure you want to signout?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="main-btn close-btn" onClick={handleClose}>
                    No
                </button>
                <button
                    type="button"
                    className={`main-btn btn-hover delete-btn`}
                    onClick={handleLogOut}
                >
                    {/* {isDeleteLoading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>} */}
                    {/* isDeleteLoading ? 'Deleting...' : 'Delete' */}

                    Yes
                </button>
            </div>
        </Modal>
    );
}

export default Logout;
