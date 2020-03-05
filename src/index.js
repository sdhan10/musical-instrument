import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MindTest from "./MindTest";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<MindTest />, document.getElementById("root"));

// If you want your MindTest to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
