import React from 'react';
import  { api } from '../../utils';
import './style.css';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';

export const NewsItem = ({ id }) => {
    const item = api.getItem(id) || {};
    const timeInMs = item.time * 1000;
    return (
        <div>
            <a href={item.url}>{item.title}</a>
            <br />
            <Link to={`/item/${item.id}`}>
                { item.score} points
            </Link>
            {' '}
            by {item.by}
            {' '}
            <time datetime={new Date(timeInMs)}>{distanceInWordsToNow(new Date(timeInMs))}</time> ago
            {' | '}
            <Link to={`/item/${item.id}`}>
                { item.descendants === 0
                ? 'discuss'
                : `${item.descendants} comments`}
            </Link>
            <br />
        </div>
    )
}