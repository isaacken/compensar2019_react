import React,{Component} from 'react';
import './assets/css/header.css';
import './assets/css/common.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <ul className="menu">
          <li className="menu-item">Login</li>
          <li className="menu-item">Sobre</li>
          <li className="menu-item">Sair</li>
        </ul>
      </nav>
    );
  }
}
