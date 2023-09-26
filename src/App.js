import React from 'react';
import './App.css';
import * as Components from './components';


const App = () => {
  return (
    <div id='app'>
      <Components.Bowl diameter={"30"} />
      <Components.NavigationButton text={"Work"} />
    </div>
  )
}

export default App