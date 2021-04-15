import { React } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon.components.jsx";
import CartDropdown from "./../CartDropdown/CartDropdown.component";

import {createStructuredSelector} from 'reselect'

import { selectCartHidden } from "./../../redux/cart/cart.selector";
import { selectCurrentUser } from "./../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";


const Header = ({ currentUser ,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          {" "}
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGNIN
        </Link>
      )}
      <CartIcon />
      
    </div>
   { hidden ? null : <CartDropdown/>}
  </div>
);

//*removed as using reselect library
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
//   // currentUser: state.user.currentUser, //state.user.currentUser  ----> Root reducer [user] =>userReducer[currentUser]
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
