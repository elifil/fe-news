import React from 'react';
import { NewsItem } from '../';
import './style.css';

export const NewsItemList = ({ ids }) => {
    return (
        <ol>
            {ids.map(id => (
                <li key={id} className='newsItem'>
                    <NewsItem id={id} />
                </li>
            ))}
        </ol>
    )
}