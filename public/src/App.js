import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Home from './pages/Home/Home';


function App() {
  return (
<Router>
      {/* <Navbar /> */}
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

