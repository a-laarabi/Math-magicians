import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Calculation from './components/Calculation';
import Quotes from './components/Quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Calculation" element={<Calculation />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
