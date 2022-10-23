import React from 'react';
import CartContext from './cart-content';

const CartProvider = ({ children }) => {
	const addItemToCartHandler = (item) => {};
	const removeItemToCartHandler = (id) => {};
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
