import React, {useState} from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(
      (prevCounter) => {
        return prevCounter + 1;
      }
    );
  }
  function decrement() {
    setCounter(
      (prevCounter) => {
        return prevCounter - 1;
      }
    );
  }

  return (
    <div>
      <h1>My Counter</h1>
      <p>{counter}</p>
      <button
        type="button"
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;