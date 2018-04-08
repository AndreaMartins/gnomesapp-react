import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Lists from './Lists/Lists';
import Detail from './Detail/Detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Lists} />
          <Route path="/:id" exact component={Detail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
