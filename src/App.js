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

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { SelectCollectionForPreview } from "./redux/shop/shop.selector";

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
    const { collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //** As redux is Used
          // this.setState(
          //   {
          //     currentUser: {
          //       id: snapShot.id,
          //       ...snapShot.data(),
          //     },
          //   } //,()=> {console.log(this.state);}
          // );
          // console.log(this.state);

          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // this.setState({ currentUser: userAuth });
        this.props.setCurrentUser(userAuth);
        addCollectionAndDocuments(
          "collections",
          collectionsArray.map(({ title, items }) => ({ title, items }))
        );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />{" "}
        {/* currentUser={this.state.currentUser}  this is removed from header after using redux */}
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
  collectionsArray: SelectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
