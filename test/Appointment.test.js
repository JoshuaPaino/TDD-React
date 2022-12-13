// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
// Imports
import { Appointment } from "../src/Appointment";
import { AppointmentsDayView } from "../src/AppointmentsDayView";
import { act } from "react-dom/test-utils";

// Start Appointment
describe("Appointment", () => {
  // Global Vars
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
  //End
});
// End Appointment

// Start AppointmentsDayView
describe("AppointmentsDayView", () => {
  // Global Vars
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });
  // End
});
// End AppointmentsDayView
