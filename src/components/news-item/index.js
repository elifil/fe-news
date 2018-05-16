import React, { Component } from 'react';
import  { api } from '../../utils';
import './style.css';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: undefined,
        }
    }

    componentDidMount() {
        api.getItem(this.props.id)
            .then(item => { this.setState({ item }) })
            .catch(err => { console.error(err) });
    }

    render() {
        const { item } = this.state;
        const timeInMs = (time) => time*1000;
        if (!item) {
            return <div>Loading…</div>
        }
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
                <time dateTime={new Date(timeInMs)}>{distanceInWordsToNow(new Date(timeInMs(item.time)))}</time> ago
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
}