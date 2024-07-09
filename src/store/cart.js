const ADD_CART = 'cart/ADD_CART';

export const addToCart = (id) => {
	return {
		type: ADD_CART,
		payload: {
			id,
		},
	};
};

export const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_CART: {
			const { id } = action.payload;
			const itemInCart = state[id];
			return {
				...state,
				[id]: {
					id,
					count: itemInCart ? itemInCart.count + 1 : 1,
				},
			};
		}
		default:
			return state;
	}
};
