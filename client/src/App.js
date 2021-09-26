import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


import Header from "./components/Header/Header.components.jsx";
import Spinner from './components/Spinner/Spinner.component';
// import HomePage from "./pages/HomePage/HomePage.components.jsx";
// import ShopPage from "./pages/Shop/ShopPage.components.jsx";
// import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp.components";
// import CheckoutPage from "./pages/Checkout/Checkout.components";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle, lightTheme,darkTheme } from "./global.styles.js";
// ErrorBoundary
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.component";

import { ThemeProvider } from "styled-components";
import useAlan from "./hooks/useAlan";
import { SelectCollectionForPreview } from "./redux/shop/shop.selector.js";
import {  useDispatch,useSelector } from "react-redux";

//one time use
// import { SelectCollectionForPreview } from "./redux/shop/shop.selector";
// import { addCollectionAndDocuments } from "./firebase/firebase.utils.js";
import { fetchCollectionsStart } from './redux/shop/shop.actions';

const HomePage = lazy(() => import("./pages/HomePage/HomePage.components.jsx"));
const ShopPage =lazy(()=>import("./pages/Shop/ShopPage.components.jsx"));
const SignInAndSignUp =lazy(()=>import("./pages/SignInAndSignUp/SignInAndSignUp.components"));
const CheckoutPage =lazy(()=>import("./pages/Checkout/Checkout.components"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage.component"));


const App = ({ checkUserSession, currentUser }) => {
  //one time to add data to shop firestore
  // useEffect(() => {
  //   addCollectionAndDocuments("collections", collectionsArray.map(({title,items})=>({title,items})));

  // });
  const dispatch = useDispatch()

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

useEffect(() => {
  dispatch(fetchCollectionsStart());
}, [dispatch]);

  const [theme, setTheme] = useState("dark");
  // const itemCollection = useSelector(SelectCollectionForPreview);
  // console.log(itemCollection);
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {/* <useAlan/> */}
        <button style={{display:"none"}} onClick={useAlan()}>Alan</button>
        <Header theme={theme} themeToggle={themeToggle} />{" "}
        {/* <button onClick={() => themeToggle()}>Change Theme</button> */}
        {/* <div useAlan>{useAlan}</div> */}
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path='/' component={HomePage} />e
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route
                exact
                path='/signin'
                render={() =>
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
                }
              />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser, //state.user.currentUser  ----> Root reducer [user] =>userReducer[currentUser]
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //one time
  // collectionsArray:SelectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
