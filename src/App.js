import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
import ShopPage from "./pages/shop/Shop.component"

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
