import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Login from './Login';
import DeliveryList from './DeliveryList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route exact={true} path='/deliverylist' component={DeliveryList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
