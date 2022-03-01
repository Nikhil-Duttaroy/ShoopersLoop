import { React } from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header.components';
import { CartDropdown } from './../CartDropdown/CartDropdown.component';


describe('Header Component', () => {
    let wrapper;
    let mockSignOutStart;
    let mockThemeToggle;;

    beforeEach(()=>{
        mockSignOutStart=jest.fn();
        mockThemeToggle=jest.fn();
        const mockProps = {
          hidden: true,
          currentUser: {
            uid: '1',
          },
          signOutStart: mockSignOutStart,
          themeToggle:mockThemeToggle,
          theme:"dark"
        };
        wrapper = shallow(<Header {...mockProps} />);
    });

    it("should render Header component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe("if currentUser is present i.e uid is true", () => {
    it("should render sign out link", () => {
        expect(wrapper.find("OptionDiv").text()).toBe("SIGN OUT");
    });
    it("should call signOutStart method when link is clicked", () => {
        wrapper.find("OptionDiv").simulate("click");
        expect(mockSignOutStart).toHaveBeenCalled();
    });
    });

describe("if currentUser is null i.e uid is null", () => {
  it("should render sign in link", () => {
    const mockProps = {
      hidden: true,
      currentUser: null,
      signOutStart: mockSignOutStart,
      themeToggle: mockThemeToggle,
      theme: "dark",
    };
    const newWrapper = shallow(<Header {...mockProps} />);
    expect(newWrapper.find("OptionLink").at(2).text()).toBe("SIGN IN");
  });
});

describe("if hidden is true", () => {
  it("should not render CartDropdown", () => {
    expect(wrapper.exists(CartDropdown)).toBe(false);
  });
});

describe("themeToggle is called",() =>{
    it("should call themeToggle",() => {
        wrapper.find("OptionLink").at(2).simulate('click') 
        expect(mockThemeToggle).toHaveBeenCalled()
    })
})

});
