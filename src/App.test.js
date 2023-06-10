import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render react app without crash", () => {
	render(<App />);
});
