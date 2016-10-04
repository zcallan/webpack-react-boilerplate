import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';


class App extends Component {
  render() {
    return (
    <div id="outer-container">
      <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />

      <main id="page-wrap">
        <Navbar />

        <Col sm={12}>
          <div>{this.props.children}</div>
        </Col>
      </main>
    </div>
    );
  }
}

export default App;
