import {getSelectedTable, getSelectedDish} from "../reducers";

export const TEST = "TEST";
export const SELECT_TABLE = "SELECT_TABLE";
export const ADD_DISH_TO_TABLE = "ADD_DISH_TO_TABLE";
export const REMOVE_DISH_FROM_TABLE = "REMOVE_DISH_FROM_TABLE";
export const ERROR_ACTION = "ERROR_ACTION";
export const ADD_NEW_DISH = "ADD_NEW_DISH";
export const FILTER_DISHES = "FILTER_DISHES";

export const testActionCreator = (message) => (dispatch) => {
	setTimeout(() => {
		dispatch({
			type: TEST,
			message: message
		});
	}, 2000);
};

export const selectTableActionCreator = (tableId) => {
	return {
		type: SELECT_TABLE,
		tableId: tableId
	};	
};

export const addDishToTableActionCreator = (dishId) => (dispatch, getState) => {
	const selectedTable = getSelectedTable(getState().tables);
	
	if(!selectedTable.length) {
		dispatch({
			type: ERROR_ACTION,
			message: "Select a table first"
		});

		return;
	}

	const selectedDish = getSelectedDish(getState().dishes, dishId);

	dispatch({
		type: ADD_DISH_TO_TABLE,
		tableId: selectedTable[0].id,
		dish: selectedDish[0]
	});
};

export const removeDishFromTableActionCreator = (tableId, dishId) => {
	return {
		type: REMOVE_DISH_FROM_TABLE,
		tableId,
		dishId
	};
};

export const addNewDishActionCreator = (dishName) => {
	return {
		type: ADD_NEW_DISH,
		name: dishName
	};
};

export const filterDishesActionCreator = (crit) => {
	return {
		type: FILTER_DISHES,
		crit
	};
};