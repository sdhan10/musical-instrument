import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MusicalInstrument from "./MusicalInstrument";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
import "./assets/css/paper-kit.min.css";
import "./assets/css/paper-kit.css.map";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";

ReactDOM.render(<MusicalInstrument />, document.getElementById("root"));

// If you want your MusicalInstrument to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
