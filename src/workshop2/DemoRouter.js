import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import CrudDemo, { PersonDetails } from './CrudDemo';

const DemoRouter = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person} />
                    <Route path="/about" component={About} />
                    <Route path="/person" component={Person} />
                    <Route path="/crud" component={CrudDemo} />
                    <Route path="/details/:id" component={PersonDetails} />

                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

const Welcome = () => "Welcome Page";
const Home = () => "Home Page";
const About = () => "About Us Page";
const Person = () => <Redirect to={"/crud"} />;
const NotFound = () => "NotFound Page";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link  className="navbar-brand" to="/">React</Link>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/person">Person</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/crud">CRUD</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-primary" to="/person">Sign Up</Link>
            </form>
          </div>
        </nav>
    );
}

export default DemoRouter;