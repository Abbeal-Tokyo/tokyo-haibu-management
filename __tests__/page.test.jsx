import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/[locale]/page";

jest.mock("@/lib/authentication/session", () => ({
  getSession: jest.fn().mockResolvedValue({}),
}));

describe("Home Page", () => {
  it("should display welcome", async () => {
    render(await Home());

    const H2 = screen.getByText("WELCOME");

    expect(H2).toBeInTheDocument();
  });
});
