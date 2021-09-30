import React from "react";
import ReactDOM from "react-dom";
import "./vendor/bootstrap.min.css";
import App from "./App";
import "./index.css";
import dotenv from "dotenv";

dotenv.config();
ReactDOM.render(<App />, document.getElementById("root"));
