import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default App;
