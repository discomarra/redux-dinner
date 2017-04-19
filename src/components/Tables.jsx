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
				onDishClick={(tableId, dishId) => dispatch(actions.removeDishFromTableActionCreator(tableId, dishId))}
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