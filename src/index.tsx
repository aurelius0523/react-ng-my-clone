import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById("react-root"));
