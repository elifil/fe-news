import React, { Component } from 'react';
import { NewsItemList } from "../";
import { api } from '../../utils';

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined,
        }
    }
    componentDidMount() {
        api.getItemsIds()
            .then(data => { this.setState({ data }) })
            .catch(err => { console.error(err) });
    }
    shouldComponetUpdate(nextProps, nextState) {
        // TODO: access current this.state and this.props
        // use isArraysEqual to check list of ids for `/`
    }
    render() {
        const { data } = this.state;
        if (!data) {
            return <div>Loading…</div>
        }
        return (
            <div>
                <NewsItemList ids={data}/>
            </div>
        )
    }
}