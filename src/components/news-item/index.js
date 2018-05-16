import React, { Component } from 'react';
import  { api } from '../../utils';
import './style.css';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

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

    shouldComponetUpdate(nextProps, nextState) {
        // TODO: access current this.state and this.props
        // use isArraysEqual to check list of ids for `/`
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
                <time datetime={new Date(timeInMs)}>{distanceInWordsToNow(new Date(timeInMs(item.time)))}</time> ago
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