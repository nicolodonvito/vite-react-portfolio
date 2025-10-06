import { useTranslation } from "react-i18next";
import "./Modal.css";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useCallback } from "react";

function Modal({ show, onClose, title, children }) {
	const { t } = useTranslation();
	const modalRef = useRef();

	const handleBackdropClick = useCallback((e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		if (show) {
			document.addEventListener("mousedown", handleBackdropClick);
		} else {
			document.removeEventListener("mousedown", handleBackdropClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleBackdropClick);
		};
	}, [show, handleBackdropClick]);

	if (!show) {
		return null;
	}

	return (
		<div className="modal-backdrop">
			<div className="modal-content" ref={modalRef}>
				<div className="modal-header">
					<h2>{t(title)}</h2>
					<button onClick={onClose} className="close-button">
						<IoClose size={24} />
					</button>
				</div>
				<div className="modal-body">{children}</div>
			</div>
		</div>
	);
}

export default Modal;