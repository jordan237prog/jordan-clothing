import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/Homepage.component"
function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Homepage} />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
