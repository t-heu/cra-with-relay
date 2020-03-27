import React from 'react';
import './App.css';

import ListBooks from './components/ListBooks'
import CreateBook from './components/CreateBook'

function App() {
  return (
    <div>
      <CreateBook />
      <ListBooks />
    </div>
  )
}

export default App;
