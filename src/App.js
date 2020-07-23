import React from 'react';
import './App.css';
import MonsterSingle from './Views/MonsterSingle/MonsterSingle';
import AddMonster from './Views/AddMonster/AddMonster';
import MonsterArchive from './Views/MonstersArchive/MonsterArchive';

function App () {
    return (
      <div className="App">
         <AddMonster/>
         <MonsterSingle/>
        <MonsterArchive/>
       
       
      </div>
    );
}

export default App;
