import React, {useState} from 'react';
import './App.css';
import Display from './Display';

// Exporting components and functions from the file for the sake of testing them.
export const increment = (prevCounter) => {
  return prevCounter + 1;
}

export const decrement = (prevCounter) => {
  return prevCounter - 1;
}

function App() {
  let [counter, setCounter] = useState(0);
  
  function doIncrement() {
    setCounter(
      (prevCounter) => {
        return increment(prevCounter);
      }
    );
  }
  function doDecrement() {
    setCounter(
      (prevCounter) => {
        return decrement(prevCounter);
      }
    );
  }

  return (
    <div>
      <h1>My Counter</h1>
      
      <Display text={counter}/>
      
      <button
        type="button"
        onClick={doIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={doDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;