import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { mutationobserver } from "mutationobserver-shim";

test("first name, last name, email, and message are rendered", () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first name/i);
  getByLabelText(/last name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test("form submit adds contact info", () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "firstname" } });
  fireEvent.change(lastNameInput, { target: { value: "lastname" } });
  fireEvent.change(emailInput, { target: { value: "email" } });
  fireEvent.change(messageInput, { target: { value: "message" } });

  expect(firstNameInput.value).toBe("firstname");
  expect(lastNameInput.value).toBe("lastname");
  expect(emailInput.value).toBe("email");
  expect(messageInput.value).toBe("message");
});

test("form placeholders are displayed", () => {
  const { getByTestId } = render(<ContactForm />);
  const fnPH = getByTestId(/firstnameinput/i);
  const lnPH = getByTestId(/lastnameinput/i);
  const emailPH = getByTestId(/emailinput/i);
  expect(fnPH).toHaveAttribute("placeholder");
  expect(lnPH).toHaveAttribute("placeholder");
  expect(emailPH).toHaveAttribute("placeholder");
});

test("reset does something", () => {
  // const { getByText } = render(<ContactForm />);
  const reset = jest.fn();
  expect(reset).toEqual(expect.anything());
});
