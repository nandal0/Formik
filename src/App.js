import './App.css';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
    <>
    
      <Router>

      <Switch>
        <Route path="/login" exact component={loginn}>
          
        </Route>
        <Route path="/"exact component={siginnn} >
    
        </Route>
      </Switch>
      </Router>
    
    </>
    
    
  );
}

export default App;

const siginnn=()=>{
  return(
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  )
}
const loginn=()=>{
  return(
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  )
}