/**
 * Created by 22935 on 2018/3/11.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return <h1> Hello, world! </h1>
  }
}

ReactDom.render(
<App />,
  document.getElementById('root')
)

/*function hello() {
  console.log('hello world');
}*/