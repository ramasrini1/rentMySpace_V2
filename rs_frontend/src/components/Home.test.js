import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import PropertyCard from "./PropertyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <PropertyCard
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("checks for listing", function () {
  const { getByText } = render(<Home />);
  let h = getByText("Property Listings:");
  expect(h).toHaveTextContent("Property Listings:");
});

// smoke test
it("renders without crashing", function() {
  render(<Home />);
});
