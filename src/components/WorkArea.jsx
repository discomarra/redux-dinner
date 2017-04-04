import React from "react";
import TablesArea from "./TablesArea.jsx";
import Menu from "./Menu.jsx";
import Separator from "./Separator.jsx";

export default () => {
	return (
		<div className="WorkArea">
			<TablesArea />
			<Separator />
        	<Menu />
		</div>
	);
};