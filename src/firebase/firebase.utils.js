
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDHbvH4sIpm3q798hUNspyNom2SxortNWY",
  authDomain: "jordan-clothingshop.firebaseapp.com",
  databaseURL: "https://jordan-clothingshop.firebaseio.com",
  projectId: "jordan-clothingshop",
  storageBucket: "jordan-clothingshop.appspot.com",
  messagingSenderId: "1088563255915",
  appId: "1:1088563255915:web:738486c6242c62e8d4ef2e",
  measurementId: "G-4DRE15C9ZS"
};


firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  console.log(userRef)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date();
    userRef.set( {displayName, email, createdAt, ...additionalData} )
      .then((result) => {
        console.log("success",result)
      }) 
      .catch((error) => console.log('error creating user ', error.message))

  }
      return userRef  

}

export default firebase

