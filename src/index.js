import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import registerServiceWorker from "./registerServiceWorker";
import RegisterForm from "./registrationForm/RegisterForm";

ReactDOM.render(<RegisterForm />, document.getElementById("root"));

registerServiceWorker();
