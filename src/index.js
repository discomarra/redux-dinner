import React from 'react';
import ReactDOM from 'react-dom';
import DinnerApp from './components/DinnerApp.jsx';
import configureStore from "./configureStore";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <DinnerApp store={store}/>,
  document.getElementById("root")
);
