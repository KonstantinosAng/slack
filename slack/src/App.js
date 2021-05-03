import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Switch>
          <Route path="/" exact>
            Slack
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
