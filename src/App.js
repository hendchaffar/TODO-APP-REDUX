import React from 'react'
import './App.css'
import Addtask from "./component/Addtask"
import ListTask from "./component/ListTask"

function App() {
  return (
    <header>
    <div className="App">
      <h1>MY TODO-LIST</h1>
    <Addtask/>
    <ListTask/>
    </div>
    </header>
  );
}

export default App;
