import React from "react";

export default ({table, onTableClick, onDishClick}) => {
	const dishes = table.dishes.map((dishItem, index) => {
		return (
			<li key={dishItem.id}><a href="#" onClick={() => onDishClick(dishItem.dish.tableId, dishItem.id)}>{dishItem.dish.name}</a></li>
		);
	});

	return (
		<div className={table.isSelected ? "Table Table-selected" : "Table"} onClick={onTableClick}>
			<div className="Table-dishes">
				<ol>
					{dishes}
				</ol>
			</div>
			<div className="Table-number">
				{table.number}
			</div>
		</div>
	);
}