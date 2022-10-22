import CartIcon from 'components/Cart/CartIcon';
import classes from './style.module.css';

const CartButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};

export default CartButton;
