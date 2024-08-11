import { expect, test } from "vitest";
import  "@testing-library/jest-dom/vitest"
import { render } from "@testing-library/react";
import Home from "./home";

test("renders home successfully", () => {
    const { getByText } = render(<Home/>)
    const p = getByText("A place to commune!")
    expect(p).toBeInTheDocument()
})