import React,{Component} from 'react';
import Button from './Button.js';
import './assets/css/hero.css';
import './assets/css/common.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>My awesome website</h1>
        <h2>Look at this amazing piece of shit</h2>
        <div>
          <Button type='primary'>Go ahead...</Button>
        </div>
      </div>
    );
  }
}
