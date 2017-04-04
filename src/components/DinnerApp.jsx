import React, { Component } from 'react';
import {Provider} from "react-redux";
import WorkArea from "./WorkArea.jsx";

import './DinnerApp.css';

class DinnerApp extends Component {
	render() {
		const {store} = this.props;

		return (
			<Provider store={store}>
				<div className="DinnerApp">
					<div className="DinnerApp-header">
						<h2>Welcome to Redux Dinner! Table for two please :-)</h2>
					</div>
					<WorkArea/>
				</div>
			</Provider>
		);
	}	
}

export default DinnerApp;
