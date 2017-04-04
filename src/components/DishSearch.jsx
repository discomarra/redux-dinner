import React, {Component} from "react";

export default class DishSearch extends Component {
	render() {
		const {onSearch} = this.props;

		return (
			<div className="Menu-input">
				<input type="text" onChange={(e) => onSearch(e.target.value)} id="dishSearch"/> <span>Search</span>
			</div>
		);
	}
}