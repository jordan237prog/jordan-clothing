import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import ShopPage from "./pages/shop/Shop.component"
import Header from "./components/header/Header.component"
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp"
import {connect} from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth) 
        userRef.onSnapshot( snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
  
        })
      }else{
        setCurrentUser( userAuth ) 
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render(){
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
  
}
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchProps) (App);
