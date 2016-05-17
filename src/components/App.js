/**
 * @name
 * @description
 * @usage
 *
 * ==================================================
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/5/17
 * ==================================================
 * @version
 * @updator
 * @date
 * @changelog
 *
 * ==================================================
 * ...
 */
import React from 'react';
import {connect} from 'react-redux';
import {init} from '../actions';
import {push, replace, go, goBack, goForward} from 'react-router-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App', props);
    // props.dispatch(init());
    // props.dispatch(push('/about'));
  }

  handleClick() {
    this.props.dispatch(push('/about'));
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>About</button>
  }
}

export default connect()(App);
