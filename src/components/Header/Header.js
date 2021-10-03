import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/restaurant">Restaurant</NavLink>
            <NavLink to="/meals">Meals</NavLink>
        </div>
    );
};

export default Header;