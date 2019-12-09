import React from 'react';
import ProviderSearch from './ProviderSearch'
import Contribute from './Contribute'
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand>Discoverability Solutions</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="mailto:matthew@discoverability.solutions">Contact</Nav.Link>
            <Nav.Link as={Link} to="/contribute">Contribute</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="https://matthewserre.com" target="_blank" rel="noopener noreferrer">
              MatthewSerre.com
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <ProviderSearch />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
