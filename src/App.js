import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
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
          <Route exact path="/signin" 
          render={
            ()=> 
              this.props.currentUser?(<Redirect to='/' />)
              :(<SignInSignUp/>)
          } 
          />
        </Switch>
      </div>
    );
  }
  
}
//for this component to get access to the state props from redux store we must do this ↙
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

//To trigger an action using redux we must do this ↙, that is to change the value of a state from the store
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchProps) (App);
