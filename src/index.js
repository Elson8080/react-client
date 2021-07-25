import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import ZHCN from 'antd/lib/locale-provider/zh_CN';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/home/index';

const MContext = React.createContext('GLOBAL_CONTEXT');

class App extends Component {
  loadUserData = () => {
    // do something globally
  }

  render() {
    return (
      <ConfigProvider locale={ZHCN}>
        <MContext.Provider value={this}>
          <Router>
            <Switch>
              <Route path='/' component={Index}></Route>
            </Switch>
          </Router>
        </MContext.Provider>
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
