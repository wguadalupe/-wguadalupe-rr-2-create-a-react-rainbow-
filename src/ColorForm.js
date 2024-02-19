import React, { useState } from 'react';

function ColorForm(props) {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return; // Prevent adding empty colors
    props.addColor(input); // Correctly access addColor from props
    setInput(''); // Reset input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
