import React from 'react';
import { NavLink } from 'react-router-dom';
const HeaderNew = () => (
    <div>
        <h3>Portfolio</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio/:id" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>


);

export default HeaderNew;