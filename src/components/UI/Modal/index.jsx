import ReactDOM from 'react-dom';
import classes from './style.module.css';

const Backdrop = ({ onHideCart }) => {
	return <div onClick={onHideCart} className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlay');

const Modal = ({ children, onHideCart }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onHideCart={onHideCart} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
