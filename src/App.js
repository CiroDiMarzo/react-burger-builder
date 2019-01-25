import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Backdrop from "./components/ui/Backdrop/Backdrop";

import BurgerContext from "./burger-context";

class App extends Component {

  static contextType = BurgerContext;

  state = {
    displayBackdrop: false
  }

  componentDidMount = () => {
    this.context.toggleBackdrop = this.toggleBackdrop;
  }

  toggleBackdrop = () => {
    this.setState((prevState) => {
      return { displayBackdrop: !prevState.displayBackdrop}
    });
  }

  render() {
    return (
      <div>
        <Backdrop show={this.state.displayBackdrop}></Backdrop>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
