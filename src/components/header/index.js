import React from 'react';
import { Menu } from '../';
import './style.css';

const mainMenu = [
    { text: 'New',    url: 'https://news.ycombinator.com/newest' },
    { text: 'Show',   url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
];

export const Header = () => (
    <div className='header'>
        <span className='header__logo'>
            <img src='https://news.ycombinator.com/y18.gif' alt='React news logo'/>
            React news
        </span>
        <div className='header__menu'>
            <Menu links ={mainMenu} />
        </div>
    </div>
);