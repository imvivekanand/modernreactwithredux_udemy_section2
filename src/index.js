//(1) Import thr React and ReactDOM libraries.


//(2) Get a reference to the div with ID root.
//(3) Tell React to take control of that element.

//(4) Create a component.
//(5) Show the component on the screen.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);