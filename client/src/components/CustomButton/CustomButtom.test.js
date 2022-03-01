import React from "react";
import { shallow } from "enzyme";
import CustomButton from './CustomButton.components';


it("should render CustomButton component", () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot()
});

