import React from 'react';
import classes from './style.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label}</label>
			<input ref={ref} {...input} />
		</div>
	);
});

export default Input;
