import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import dinnerApp from "./reducers";

const configureStore = () => {
	const middlewares = [thunk];

	if(process.env.NODE_ENV !== "production") {
		middlewares.push(createLogger());
	}

	return createStore(
		dinnerApp,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;