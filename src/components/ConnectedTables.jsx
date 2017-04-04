import {connect} from "react-redux";

import Tables from "./Tables.jsx";

const mapStateToProps = (state) => {
	return {
		tables: state.tables,
		selectedId: state.selectedId
	};
};

const ConnectedTables = connect(mapStateToProps)(Tables);

export default ConnectedTables;