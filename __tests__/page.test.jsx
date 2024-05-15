import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/[locale]/page";

describe("Home Page", () => {
  it("renders a logo", () => {
    render(<Home />);

    const H2 = screen.getByText("MAIN PAGE");

    expect(H2).toBeInTheDocument();
  });
});
