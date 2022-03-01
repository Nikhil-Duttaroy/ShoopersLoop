import React from "react";
import { shallow } from "enzyme";

import CartItem from "../CartItem/CartItem.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {CartDropdown} from './CartDropdown.component';

import * as redux from "react-redux";


describe("CartDropdown component", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ user: "test" });
    

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find("CartDropdownButton").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if cartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch,
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect(newWrapper.exists("EmptyMessageContainer")).toBe(true);
  });
});
