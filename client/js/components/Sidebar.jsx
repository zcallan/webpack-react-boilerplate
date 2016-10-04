import '../../scss/sidebar.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import BurgerMenu from 'react-burger-menu';

let SideMenu = BurgerMenu.push;

let RadiumLink = Radium(Link);


class Sidebar extends Component {
  render() {
    return (
      <SideMenu pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
        <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/about">About</RadiumLink>
      </SideMenu>
    );
  }
}

export default Sidebar;
