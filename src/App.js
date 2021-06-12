import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header.components.jsx";
import HomePage from "./pages/HomePage/HomePage.components.jsx";
import ShopPage from "./pages/Shop/ShopPage.components.jsx";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp.components";
import CheckoutPage from "./pages/Checkout/Checkout.components";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";


class App extends React.Component {
  //** As redux is Used
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } =this.props
    checkUserSession();
    // const {setCurrentUser} =this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapShot) => {
    //       this.props.setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else {
    //     this.props.setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />{" "}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
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
