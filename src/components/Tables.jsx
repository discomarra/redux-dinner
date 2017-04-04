import React from "react";
import * as actions from "../actions";
import Table from "./Table.jsx";

const Tables = ({tables, selectedId, dispatch}) => {
	const tablesArray = tables.map((table, index) => {
		return (
			<Table 
				key={table.id} 
				table={table} 
				onTableClick={() => dispatch(actions.selectTableActionCreator(table.id))}
				onDishClick={(dish) => dispatch(actions.removeDishFromTableActionCreator(dish.tableId, dish.id))}
			/>
		);
	});

	return (
		<div className="Tables">
			{tablesArray}
		</div>
	);
};

export default Tables;