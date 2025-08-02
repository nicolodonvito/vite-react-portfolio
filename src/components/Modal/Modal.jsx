import { withTranslation } from "react-i18next";
import "./Modal.css";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";

function Modal({ t, show, onClose, title, children }) {
	const modalRef = useRef();

	const handleBackdropClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		if (show) {
			document.addEventListener("mousedown", handleBackdropClick);
		} else {
			document.removeEventListener("mousedown", handleBackdropClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleBackdropClick);
		};
	}, [show, onClose]);

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

export default withTranslation()(Modal);