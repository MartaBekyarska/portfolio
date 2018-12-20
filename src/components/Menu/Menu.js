import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Menu.css';

const Menu = props => (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={props.drawerClickHadler}/>
                </div>
                <div className='toolbar__logo'><Link to="/">Marta Bekyarska</Link></div>
                <div className='space' />
                <div className='toolbar_navigation-items'>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    );
export default Menu;