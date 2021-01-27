import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './views/Reg';
import {Router} from '@reach/router';
import Main from './views/Main';
import Login from './views/Login'

function App() {
  const [logged, setLogged] = useState(null);

  return (
    <div className="App">
      <Router>
        <Reg
          path="/"
          setLogged={setLogged}
        />
        <Login
          path="/login"
          setLogged={setLogged}
        />
        <Main
          path="/dashboard"
          Logged={logged}
          setLogged={setLogged}
        />
      </Router>
    </div>
  );
}

export default App;
