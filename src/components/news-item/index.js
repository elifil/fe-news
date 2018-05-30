import React, { Component } from 'react';
import  { api } from '../../utils';
import './style.css';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

export class NewsItem extends Component {

    componentDidMount() {
        this.props.fetchItem(this.props.id)
    }

    render() {
        //const item = this.state.item;
        const item = this.props.item;
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

const mapStateToProps = (state, ownProps) => {
  return {
    item: (state.data.items[ownProps.id] || {}).item
  }
};

const mapDispatchToProps = {
  fetchItem: actions.fetchItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
