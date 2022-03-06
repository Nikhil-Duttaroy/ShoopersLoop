import React from "react";
import { shallow } from "enzyme";
import { ShopPage } from './ShopPage.components';


describe('ShopPage', () => {
  let mockMatch;

  beforeEach(() => {
    mockMatch = {
      path: "/shop",
    };
  });

  it("should render ShopPage component", () => {
    expect(shallow(<ShopPage match={mockMatch.path} />)).toMatchSnapshot();
  });
});


