import React, { Component } from 'react';
import Menu from './/MenuComponent';
import FLOWERS from '../shared/flowers';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      flowers: FLOWERS,
      selectedFlower: null
    };
  }

  onFlowerSelect(flowerId){
    this.setState({
        selectedFlower: flowerId
    });
  }

  render() {
    return (
        <div>
          <Header />
          <Menu flowers={this.state.flowers} 
            onClick={(flowerId) => this.onFlowerSelect(flowerId)}/>
            {/*<FlowerDetail 
            flower={this.state.flowers.filter((flower) => flower.id === this.state.selectedFlower) [0]} />*/}
          <Footer />
        </div>
    );
  }
}

export default Main;