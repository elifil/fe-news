import PropTypes from 'prop-types';
import {api} from "../../utils";

export const ns = 'itemsIds';

export const shape = {};

export const defaultState = {
  ids: [],
  isLoading: false,
  error: null
};

const root = state => state[ns];

const selectors = {
  root,
  ids: state => root(state).ids,
  isLoading: state => root(state).isLoading,
  error: state => root(state).error
};

const types = {
  start: 'REQUEST_ITEMS_IDS_START',
  success: 'REQUEST_ITEMS_IDS_SUCCESS',
  fail: 'REQUEST_ITEMS_IDS_FAIL'
};

export const requestItemsIdsStart = () => ({
  type: types.start,
});

export const requestItemsIdsSuccess = itemsIds => ({
  type: types.success,
  payload: itemsIds,
});

export const requestItemsIdsFail = err => ({
  type: types.fail,
  payload: err,
});

export const fetchItemsIds = () => {
  return (dispatch) => {
    dispatch(requestItemsIdsStart());
    return api
      .getItemsIds()
      .then(itemsIds => {
        dispatch(requestItemsIdsSuccess(itemsIds));
      })
      .catch(err => {
        dispatch(requestItemsIdsFail(err));
      });
  }
};

const actions = {
  requestItemsIdsStart,
  requestItemsIdsSuccess,
  requestItemsIdsFail,
  fetchItemsIds
}

const stringifyErr = err => err.toString();

export const rawReducer = (state=defaultState, action) => {
  switch (action.type) {
    case types.start:
      return {
        ...state,
        isLoading: true
      };
    case types.success:
      return {
        ids: action.payload,
        isLoading: false,
        error: null
      };
    case types.fail:
      return {
        ids: {},
        isLoading: false,
        error: stringifyErr(action.payload),
      };
    default:
      return state;
  }
};

export const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  selectors,
  types,
  actions,
  rawReducer,
  reducer
}