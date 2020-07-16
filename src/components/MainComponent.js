import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './/MenuComponent';
import FLOWERS from '../shared/flowers';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      flowers: FLOWERS,
    };
  }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }
    return (
        <div>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/flower" component={() => <Menu flowers={this.state.flowers} />} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default Main;