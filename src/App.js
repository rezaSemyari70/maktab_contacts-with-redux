import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import ContactList from './Views/ContactList/ContactList';
import {Container} from "@material-ui/core";
import store from './redux/store';
import {Provider} from 'react-redux';
import InfoContact from "./Components/Contacts/InfoContact/InfoContact";
const App = (props) => {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Provider store={store}>
            <Container  className="px-0">
                <Router>
                    <div>
                        <Navbar className="pl-5"  light expand="md">
                            <NavbarBrand className="text-light" to="/">Contacts</NavbarBrand>
                            <NavbarToggler onClick={toggle}/>
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto text-light" navbar>
                                    <NavItem>
                                        <Link className="nav-link text-light" to="/contacts">Contactlist</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link text-light" to="/add">Add contact</Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <Switch>
                            <Route exact path="/contacts/:id">
                                <InfoContact/>
                            </Route>
                            <Route exact path="/contacts">
                                <ContactList/>
                            </Route>
                            <Route exact path="/add">
                              <InfoContact/>
                            </Route>
                            <Route path="/"></Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </Provider>
    );
}

export default App;