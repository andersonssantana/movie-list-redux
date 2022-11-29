import React from 'react';
import './App.css';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route path="/" element={ <Home /> } />
        </Switch>
    );
  }
}

export default App;
