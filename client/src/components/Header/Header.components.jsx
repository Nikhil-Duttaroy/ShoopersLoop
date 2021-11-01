import { React } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import "./Header.styles.scss";
import CartIcon from "../CartIcon/CartIcon.components.jsx";
import CartDropdown from "./../CartDropdown/CartDropdown.component";

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "./../../redux/cart/cart.selector";
import { selectCurrentUser } from "./../../redux/user/user.selector";

import {
  ReactComponent as Logo,
} from "../../assets/shoppers-loop.svg";
import {
  ReactComponent as LogoSmall,
} from "../../assets/shoppers-loop-small.svg";
import  sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";


//Styled Components import
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./Header.styles";
import { signOutStart } from "./../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart, themeToggle, theme }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      {/* <Logo className='logo' /> */}
      {typeof window !== "undefined" ? (
        window.innerWidth >= 400 ? (
          <Logo />
        ) : (
          <LogoSmall />
        )
      ) : null}
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}> SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signin'>SIGNIN</OptionLink>
      )}
      <OptionLink onClick={() => themeToggle()}>
        {theme === "light" ? (
          <img src={moon} alt='dark mode' style={{ width: "1.5rem" }} />
        ) : (
          <img src={sun} alt='light mode' style={{ width: "1.5rem" }} />
        )}
      </OptionLink>

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//*removed as using reselect library
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
// currentUser: state.user.currentUser, //state.user.currentUser  ----> Root reducer [user] =>userReducer[currentUser]
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
