import React from "react";
import { render } from "@testing-library/react";
import About from "./About";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <About
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

