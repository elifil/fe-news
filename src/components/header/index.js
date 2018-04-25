import React from 'react';
import { Menu } from '../';

const mainMenu = [
    { text: 'New',    url: 'https://news.ycombinator.com/newest' },
    { text: 'Show',   url: 'https://news.ycombinator.com/show' },
    { text: 'Submit', url: 'https://news.ycombinator.com/submit' },
];

const numbers = [1 ,2 ,3];
const double = a => a * 2;
console.log(numbers.map(double));

const first = mainMenu[0];
console.log(first.text);
console.log(first.url);

export const Header = () => (
    <div>
        <span>
            <img src='https://news.ycombinator.com/y18.gif' alt='React news logo'/>
            React news
        </span>
        <Menu links ={mainMenu} />
    </div>
);