import {requestItemFail, requestItemStart, requestItemSuccess} from "../../actions";
import {api} from "../../utils";

export const ns = 'items';

export const shape = {};

export const defaultState = {};

const root = state => state[ns];

const selectors = {
  root,
  item: (state, id) => (root(state)[id] || {}).item,
  isLoading: (state, id) => (root(state)[id] || {}).isLoading,
  error: (state, id) => (root(state)[id] || {}).error
};

const types = {
  start: 'REQUEST_ITEM_START',
  success: 'REQUEST_ITEM_SUCCESS',
  fail: 'REQUEST_ITEM_FAIL'
};

const requestItemStart = id => ({
  type: types.start,
  payload: id,
});

const requestItemSuccess = itemObj => ({
  type: types.success,
  payload: itemObj,
});

const requestItemFail = (id, err) => ({
  type: types.fail,
  payload: { id, err },
});

const fetchItem = id => {
  return (dispatch) => {
    dispatch(requestItemStart(id));
    return api
      .getItem(id)
      .then(item => {
        dispatch(requestItemSuccess(item));
      })
      .catch(err => {
        dispatch(requestItemFail(id, err));
      });
  }
};

const actions = {
  requestItemStart,
  requestItemSuccess,
  requestItemFail,
  fetchItem
}

const stringifyErr = err => err.toString();

const rawReducer = (state = {}, action) => {
  switch (action.type) {
    case types.start:
      return {
        ...state,
        [action.payload]: { item: {}, isLoading: true, error: null },
      };
    case types.success:
      return {
        ...state,
        [action.payload.id]: {
          item: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case types.fail:
      return {
        ...state,
        [action.payload.id]: {
          item: {},
          isLoading: false,
          error: stringifyErr(action.payload.err),
        }
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