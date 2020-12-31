import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from './Screens/Dashboard';
import Widgets from './Screens/Widgets';
import Login from './Screens/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Sidebar/>

      <Router>
      <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/widgets" exact>
            <Widgets/>
          </Route>

      </Router>

    </div>
  );
}

export default App;
