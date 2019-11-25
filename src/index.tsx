import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "src/components/App";
import "./index.css";
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
// registerServiceWorker();
