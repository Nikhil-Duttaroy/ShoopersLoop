import React,{useEffect} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


import Header from "./components/Header/Header.components.jsx";
import HomePage from "./pages/HomePage/HomePage.components.jsx";
import ShopPage from "./pages/Shop/ShopPage.components.jsx";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp.components";
import CheckoutPage from "./pages/Checkout/Checkout.components";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle } from "./global.styles.js";

const App=({ checkUserSession,currentUser }) =>{
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle/>
        <Header />{" "}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    ); 
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser, //state.user.currentUser  ----> Root reducer [user] =>userReducer[currentUser]
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
