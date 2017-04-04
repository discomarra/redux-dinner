import React, {Component} from "react";

export default class DishAdd extends Component {
	constructor() {
		super();

		this.inputValue = "";
	}

	onChange(e) {
		this.inputValue = e.target.value;
	}

	render() {
		const {onAddClick} = this.props;
		return (
			<div className="Menu-input">
				<input className="Menu-button" onChange={(e) => this.onChange(e)} type="text" id="dishAdd"/>
				<input type="button" value="Add" onClick={() => onAddClick(this.inputValue)}/>
			</div>
		);
	}
}