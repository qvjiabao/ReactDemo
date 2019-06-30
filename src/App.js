import React, { Fragment } from 'react';
import { Globalstyle } from './style'
import Header from './common/header/index';
import {GlobalstyleIconfont} from './statics/iconfont/iconfont'

function App() {
  return (
    <Fragment>
      <Globalstyle />
      <GlobalstyleIconfont />
      <Header />
    </Fragment>
  );
}

export default App;
