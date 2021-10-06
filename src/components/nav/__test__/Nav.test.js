import React from "react";
import ReactDom from "react-dom";
import Nav from "../Nav";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Nav renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Nav></Nav>, div);
  ReactDom.unmountComponentAtNode(div);
});



