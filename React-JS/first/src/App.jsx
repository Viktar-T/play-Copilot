import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <div>
      <div className="hello-world">{isDisplayed && 'Hello world'}</div>
      <button onClick={toggleDisplay}>Toggle Display</button>
    </div>
  )
}

export default App;