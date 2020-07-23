import React from 'react';
import './App.css';
import MonsterSingle from './Views/MonsterSingle/MonsterSingle';
import AddMonster from './Views/AddMonster/AddMonster';
import MonsterArchive from './Views/MonstersArchive/MonsterArchive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/monsters/add">add</Link>
            </li>
            <li>
              <Link to="/monsters">monsters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/monsters">
            <MonsterArchive />
          </Route>
          <Route exact path="/monsters/add">
            <AddMonster />
          </Route>
          <Route path="/monsters/:id">
            <MonsterSingle/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
