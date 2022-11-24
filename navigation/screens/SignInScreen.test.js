import React from "react";
import { render, fireEvent } from "@testing-library/react-native"

import SignInScreen from "./SignInScreen";

// it("shows invalid input messages", () => {
//     const { getAllByText, getByPlaceHolderText} = render(<SignInScreen />);

//     expect(getAllByText("Login").length).toBe(2);
//     getByPlaceHolderText("example");
//     getByPlaceHolderText("***");
// })

it("shows invalid username error message", () => {
    const { getByTestId, getByText, queryAllbyText} = render(<SignInScreen />);

    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "asdf");

    fireEvent.press(getByTestId("SignIn.Button"));

    getByText("Invalid username.");
    expect(queryAllbyText("Invalid password.").length).toBe(0);
});
