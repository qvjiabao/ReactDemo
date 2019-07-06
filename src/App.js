import React, { Fragment } from 'react';
import { Globalstyle } from './style'
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Fragment>
      <Globalstyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
