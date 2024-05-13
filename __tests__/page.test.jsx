import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from "@/app/[locale]/page";

 
describe("Home Page", () => {
  it("renders a logo", () => {
    render(<Home />);
 
    const logo = screen.getByAltText("Next.js Logo");
 
    expect(logo).toBeInTheDocument();
  })
})