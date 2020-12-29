import "./App.css";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
