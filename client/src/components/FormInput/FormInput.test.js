import React from "react";
import { shallow } from "enzyme";

import FormInput from './FormInput.components';

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "name",
      value: "test",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormInputContainer").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormInputLabel if there is a label", () => {
    expect(wrapper.exists("FormInputLabel")).toBe(true);
  });

  it("should not render FormInputLabel if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "test",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists("FormInputLabel")).toBe(false);
  });
});
