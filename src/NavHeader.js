import React from 'react';
import {NavLink} from 'react-router-dom';

export class NavHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    const hash = window.location.hash.slice(2);
    return (
      <div id="nav-header">
        <div>
          <NavLink exact to='/' activeClassName="selected">Home</NavLink>
        </div>
        <div>
          <NavLink to='/people' activeClassName="selected">People</NavLink>
          <p display="inline">Total:{this.props.numberPeople}</p>
        </div>
        <div>
          <NavLink to='/create' activeClassName="selected">Create A Person</NavLink>
        </div>
      </div>
    );
  }
};
