import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

import './App.css';

class App extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="App">
        App here
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state: state.reducer })

export default connect(mapStateToProps)(App)

  // <h3>
  //   Create a 'checklist' app that allows the following operations:
  // </h3>
  // <ul>
  //   <li>Add and remove entries to the list</li>
  //   <li>Check and uncheck an entry</li>
  //   <li>Move items up and down in the list</li>
  //   <li>Check all items at once</li>
  // </ul>
  // <h3>Testing</h3>
  // <p>
  //   Write some tests using the testing framework of your choice to test the logic of the app.
  // </p>
  // <p>Bonus: use Jest to test one of your react components</p>
  // <br/><br/>
  // <span>Don't worry about the style/design of the UI</span>

