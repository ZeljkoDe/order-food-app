import classes from './style.module.css';

const MealItem = ({ name, description, price }) => {
	const priceFormatted = `$${price.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{priceFormatted}</div>
			</div>
			<div></div>
		</li>
	);
};

export default MealItem;
