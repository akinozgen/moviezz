import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Router from "./router";

ReactDOM.render(
  <Router /> as React.DOMElement<any, any>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
