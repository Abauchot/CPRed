import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-wrapper">
                <div className="modal bg-white w-96 p-6 rounded-lg">
                    <div className="modal-header flex justify-end">
                        <a href="#" onClick={handleCloseClick} className="text-gray-600">
                            x
                        </a>
                    </div>
                    {title && <h1 className="text-xl font-semibold mb-4">{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal;
