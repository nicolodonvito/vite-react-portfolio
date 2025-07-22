import { withTranslation } from "react-i18next";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

function Modal({ t, show, onClose, title, children }) {
	if (!show) {
		return null;
	}

	return (
		<div className="modal-backdrop">
			<div className="modal-content">
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