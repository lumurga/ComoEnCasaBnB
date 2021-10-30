import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';

import './Styles/App.scss'


function App() {

  const [logeado, setLogeado] = useState(false)

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
              <Home logeado={logeado}/>
          </Route>
          <Route exact path="/login">
              <Login button="register" logeado={logeado} setLogeado={setLogeado}/>
          </Route>
          <Route exact path="/register">
              <Register button="login" logeado={logeado} />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
