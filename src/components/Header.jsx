import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/components/Header.css';

export const Header = () => {
    return (
        <header className="site-header">
            <div className="header-brand">
                <span className="brand-kicker">Portfolio</span>
                <h1>Sopena Remy</h1>
            </div>
            <nav className="header-nav">
                <NavLink to="/">A propos de moi</NavLink>
                <NavLink to="/projects">Projets</NavLink>
                <NavLink to="/contacts">Me contacter</NavLink>
            </nav>
        </header>
    );
};

export default Header;
