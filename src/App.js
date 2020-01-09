import React, { Component } from 'react';
import Header from './containers/Header';
import Panel from './containers/Panel';
import style from './App.css';

class App extends Component {
  render () {
    return (
      <div className={style['Main-Container']}>
        <Header/>
        <Panel/>
      </div>
    );
  }
}

export default App;
