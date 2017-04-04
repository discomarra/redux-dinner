import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

import DishSearch from "./DishSearch.jsx";
import DishAdd from "./DishAdd.jsx";
import DishList from "./DishList.jsx";

let Menu = ({...props, dishes}) => {
	return (
		<div className="Menu">
			<h3>Menu</h3>
			<DishSearch {...props}/>
			<DishAdd {...props}/>
			<DishList {...props} dishes={dishes}/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		crit: state.crit
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDishClick: (id) => {
			dispatch(actions.addDishToTableActionCreator(id));
		},
		onAddClick: (dishName) => {
			dispatch(actions.addNewDishActionCreator(dishName));
		},
		onSearch: (crit) => {
			dispatch(actions.filterDishesActionCreator(crit));
		}
	};
};

const ConnectedMenu = connect(
	mapStateToProps,
	mapDispatchToProps)(Menu);

export default ConnectedMenu;