import {combineReducers} from "redux";
import * as actions from "../actions";
import {v4} from "uuid";

const initialTableState = [
	{id: 1, number: 1, isSelected: false, dishes: []},
	{id: 2, number: 2, isSelected: false, dishes: []},
	{id: 3, number: 3, isSelected: false, dishes: []},
	{id: 4, number: 4, isSelected: false, dishes: []},
	{id: 5, number: 5, isSelected: false, dishes: []},
	{id: 6, number: 6, isSelected: false, dishes: []},
	{id: 7, number: 7, isSelected: false, dishes: []},
	{id: 8, number: 8, isSelected: false, dishes: []}
];

const initialDishesState = [
	{id: 1, name: "Fish"},
	{id: 2, name: "Veal"},
	{id: 3, name: "Pork"},
	{id: 4, name: "Salad 1"},
	{id: 5, name: "Salad 2"},
	{id: 6, name: "Wine"},
	{id: 7, name: "Juice"},
	{id: 8, name: "Beer"},
	{id: 9, name: "Water"},
];

const dishesSearchCriteriaReducer = (state = "", action) => {
	switch (action.type) {
		case actions.FILTER_DISHES:
			return	action.crit;
		default: {
			return state;
		}
	}
}

const dishesReducer = (state = initialDishesState, action) => {
	switch (action.type) {
		case actions.TEST: 
			return {
				...state,
				message: action.message
			};
		case actions.ADD_NEW_DISH:
			return [...state, {id: v4(), name: action.name}];
		default: {
			return state;
		}
	}
};

const tablesReducer = (state = initialTableState, action) => {
	switch (action.type) {
		case actions.SELECT_TABLE: 
			return state.map((item) => {
				if(item.id !== action.tableId) {
					return {
						...item,
						isSelected: false
					};
				}

				return {
					...item,
					isSelected: true
				};
			});
		case actions.ADD_DISH_TO_TABLE:
			return state.map((item) => {
				if(item.id !== action.tableId) {
					return item;
				}

				return {
					...item,
					dishes: [...item.dishes, {id: v4(), dish: { ...action.dish, tableId:action.tableId } }]
				};
			});
		case actions.REMOVE_DISH_FROM_TABLE:
			return state.map((item) => {
				if(item.id !== action.tableId) {
					return item;
				}

				return {
					...item,
					dishes: item.dishes.filter((dishItem) => dishItem.id !== action.dishId)
				};
			});
		default: {
			return state;
		}
	}
};

export default combineReducers({
	dishes: dishesReducer,
	tables: tablesReducer,
	crit: dishesSearchCriteriaReducer
});

export const getSelectedTable = (state) => state.filter((item) => item.isSelected);
export const getSelectedDish = (state, id) => state.filter((item) => item.id === id);