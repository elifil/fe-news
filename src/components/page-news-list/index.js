import React, { Component } from 'react';
import { NewsItemList } from "../";
import { api } from '../../utils';
import { connect } from 'react-redux';
import {fetchItemsIds, setItemsToShow} from "../../actions";
import * as ducks from '../../ducks'

const isArraysEqual = (arr1=[], arr2=[]) => arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined,
        }

        this.fetchItems = () => {
            api.getItemsIds()
                .then(data => { this.setState({ data }) })
                .catch(err => { console.error(err) });
        }
    }

    componentDidMount() {
        this.fetchItems()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isArraysEqual(this.state.data, nextState.data)
    }

    render() {
        const { data } = this.state;
        if (!data) {
            return <div>Loading…</div>
        }
        return (
            <div>
                <NewsItemList ids={data}/>
                <button onClick={this.fetchItems}>
                    Refresh
                </button>
              items to show
              <input onChange={e =>
                this.props.setItemsToShow(e.target.value)
              } />
            </div>
        )
    }
}

const firstN = (n, arr) => arr.slice(0, n);

const mapStateToProps = state => {
  const n = ducks.ui.selectors.itemsToShow(state);
  const ids = firstN(n, state.data.itemsIds.ids);
  return {
    ids
  }
};

const mapDispatchToProps = {
  fetchItemsIds,
  setItemsToShow
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);