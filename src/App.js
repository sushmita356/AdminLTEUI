import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from './components/Dashboard';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Router>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
      </Router>

    </div>
  );
}

export default App;
