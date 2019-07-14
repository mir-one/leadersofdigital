import React, {Component, Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import MainPage from "./components/MainPage/MainPage";
import logo from "./img/logo.png"




import { Container, Row, Navbar, Nav, NavDropdown, Form, FormControl,  Button} from 'react-bootstrap';
const MapPage = lazy(()=>import('./components/MapPage/MapPage'));
const MapAfUser = lazy(()=>import('./components/MapAfUser/MapAfUser'));

const customHistory = createBrowserHistory();



class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return [
      <Navbar key="1" bg="light" expand="lg">
        <Navbar.Brand href="/"><img width="150px" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/map">Карта аффилированных компаний</Nav.Link>
            <Nav.Link href="/map-af-user">Аффилированные физ. лица</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>, 
      <Router key="2" history={customHistory}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={ (()=>(<MainPage />)) } />
                <Route path="/map" component={ (()=>(<MapPage />)) } />    
                <Route path="/map-af-user" component={ (()=>(<MapAfUser />)) } />          
            </Switch>
          </Suspense>
      </Router>


    ]
  }
}



export default App;
