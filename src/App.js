import React, { useState } from 'react';
import './App.css';

import Search from './components/search';
import ListView from './components/listView';

function App() {
  const [list, setList] = useState(null);
  const [isTerm, setIsTerm] = useState(false);

  const updateList = (list, condition) => {
    console.log(list);
    setList(list);
    setIsTerm(condition || false);
  };
  return (
    <div class='container'>
      <Search setList={updateList} />
      <ListView list={list} isTerm={isTerm} setList={updateList} />
    </div>
  );
}

export default App;
