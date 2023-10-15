import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['Yellow', 'Green', 'black', 'blue', 'red'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
