import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import './App.less';
import routes from './router';
import { RouteWithSubRoutes } from './static/common';
import { RouteInterface } from './static/interface';
// import logo from './logo.svg';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
          <Router>
              <Switch>
                  {routes.map((route: RouteInterface, i: number) => {
                      return RouteWithSubRoutes(route, i)
                  })}
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
