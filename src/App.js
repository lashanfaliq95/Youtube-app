import React, {useState} from 'react';
import './App.css';

import Search from './components/search';
import ListView from './components/listView';

function App() {
  const [list, setList]=useState(null);
  const [isTerm, setIsTerm]=useState(false);

  return (
         <div class="container">
          <Search 
            setList={(list, condition)=>{
            setList(list)
            setIsTerm(condition || false);
            }}/>
          <ListView 
            list={list}
            isTerm={isTerm}
            setList={(list)=>{
              setList(list);
            }}
            />
         </div>
);
}

export default App;
