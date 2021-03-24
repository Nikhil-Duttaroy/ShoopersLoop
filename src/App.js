import React from 'react'
import {Route ,Switch} from 'react-router-dom'

import './App.css';
import Header from "./components/Header/Header.components.jsx";
import HomePage from './pages/HomePage/HomePage.components.jsx';
import ShopPage from './pages/Shop/ShopPage.components.jsx';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.components';

import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
  

export default App;
