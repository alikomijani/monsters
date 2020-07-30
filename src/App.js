import React ,{useState} from 'react';

import MonsterSingle from './Views/MonsterSingle/MonsterSingle';
import AddMonster from './Views/AddMonster/AddMonster';
import MonsterArchive from './Views/MonstersArchive/MonsterArchive';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='App'>
      <Container >
        <Router>
          <Navbar color="light" light expand="md">
            <NavbarBrand >Monsters</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>        
                  <Link className='nav-link' to="monsters">Monsters list</Link>
                </NavItem>
                <NavItem>
                  <Link  className='nav-link' to="monsters/add">New Monster</Link> 
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/monsters" >
              <MonsterArchive />
            </Route>
            <Route exact path="/monsters/add" component={AddMonster} />
            <Route path="/monsters/:id"
              render={(props) => <MonsterSingle isLoading={true} {...props} />} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
