import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import VoteListPage from "./components/VoteListPage";

ReactDOM.render(
    <React.StrictMode>
        <App>
            <VoteListPage/>
        </App>
    </React.StrictMode>,
    document.getElementById("root")
);