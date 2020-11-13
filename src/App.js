import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import ShopPage from "./pages/shop/Shop.component"
import Header from "./components/header/Header.component"

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
