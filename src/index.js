import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";

import "./vendor/bootstrap.min.css";
import "./index.css";

import App from "./App";

dotenv.config();

ReactDOM.render(<App />, document.getElementById("root"));
