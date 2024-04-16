import React from 'react';
import './App.css';
import ConvertorContainer from './components/ConvertorContainer';

function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-r from-violet-400 to-indigo-600 h-[100vh] flex items-center justify-center'>
        <ConvertorContainer/>
      </div>
    </div>
  );
}

export default App;
