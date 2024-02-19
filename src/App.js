import React, { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]); // Add new color to the array
  };

  return (
    <div className="App">
      <ColorForm addColor={addColor} />
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
    </div>
  );
}

export default App;
