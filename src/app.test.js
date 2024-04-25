// Header.test.js

import React from "react";
import { render } from "@testing-library/react";
import Header from "./Components/Header/Header";

describe("Header", () => {
	it("should render the header with the correct name", () => {
		const { getByText } = render(<Header />);
		const headerElement = getByText("Meme Generator");
	});
});
