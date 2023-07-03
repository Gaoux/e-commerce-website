import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, children, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
