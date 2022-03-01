import React from "react";
import { shallow } from "enzyme";
import { CartItem } from './CartItem.component';

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.test.com",
    price: 100,
    name: "jeans",
    quantity: 1,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
