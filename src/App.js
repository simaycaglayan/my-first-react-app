import React from 'react';
import MyComponent from './components/MyComponent'
import './App.css';

function App() {
  return (
    <div className="App">
        <MyComponent name="Sara" age="25" > this is children </MyComponent>
    </div>
    );
    }


export default App;
