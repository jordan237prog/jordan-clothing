import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import ShopPage from "./pages/shop/Shop.component"
import Header from "./components/header/Header.component"
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp"
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
