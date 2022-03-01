import React from "react";
import { shallow } from "enzyme";
import HomePage from './HomePage.components';

it("should render Homepage component", () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
