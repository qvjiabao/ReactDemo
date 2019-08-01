import React, { Fragment } from 'react';
import { Globalstyle } from './style'
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/detail/index';
import Home from './pages/home/index';

function App() {
  return (
    <Fragment>
      <Globalstyle />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
