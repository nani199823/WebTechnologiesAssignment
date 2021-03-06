import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import Research from './Research'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;