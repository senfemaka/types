import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import Test from "./components/Test";

render(
  <div>
    <DevTools />
    <Test />
  </div>,
  document.getElementById("root")
);
