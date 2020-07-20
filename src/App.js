import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import User from './User';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [{name: "Loading"}]
    };
    
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({items: data});
    console.log(data);
    
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home people={this.state.items} />
          </Route>
          <Route path="/user/:username">
            <User />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
