import React from "react";

import Dish from "./Dish.jsx";

export default ({onDishClick, dishes, crit}) => {
	const dishComponents = dishes
		.filter((dish) => {
			return dish.name.indexOf(crit) > -1;
		})
		.map((dish) => {
			return (
				<Dish key={dish.id} id={dish.id} name={dish.name} onClick={onDishClick}/>
			);
		})

	return (
		<ol>
			{dishComponents}
		</ol>
	);
}