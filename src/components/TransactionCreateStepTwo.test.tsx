import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event";

test("on initial render the pay buttons is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
  const payBtn = screen.findByRole("button", {
    name: /pay/i,
  });

  /**
   * toBeDisabled()
   *
   * This allows you to check whether an element is disabled from the user's
   * perspective. According to the specification, the following elements can
   * be disabled: button, input, select, textarea, optgroup, option, fieldset,
   * and custom elements.
   */
  expect(await payBtn).toBeDisabled();
});

test("if an amount and note is entered, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/Amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  const payBtn = screen.findByRole("button", {
    name: /pay/i,
  });
  /**
   * toBeEnabled()
   *
   * This allows you to check whether an element is not disabled from
   * the user's perspective.
   *
   * https://github.com/testing-library/jest-dom#tobeenabled
   */
  expect(await payBtn).toBeEnabled();
});
