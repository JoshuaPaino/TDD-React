// Need to import react and ReactDom because it's used inside of the test suite
import React from "react";
import ReactDOM from "react-dom/client";
// Appointment is not defined so it needs to be imported
import { Appointment } from "../src/Appointment";
// ACT makes sures that the rednering is finisehd before the test is ran
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });
});
