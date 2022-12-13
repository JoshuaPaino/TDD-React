// Need to import react and ReactDom because it's used inside of the test suite
import React from "react";
import ReactDOM from "react-dom/client";
// Appointment is not defined so it needs to be imported
import { Appointment } from "../src/Appointment";
// ACT makes sures that the rednering is finisehd before the test is ran
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });
  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jordan");
  });
});
