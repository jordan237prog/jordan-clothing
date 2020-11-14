import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import ShopPage from "./pages/shop/Shop.component"
import Header from "./components/header/Header.component"
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp"
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth) 
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUse: null}) //userAuth
      }
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
