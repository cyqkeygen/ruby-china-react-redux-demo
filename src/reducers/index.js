import { combineReducers } from 'redux';
import { 
  UI_SWITCH,
  REQUEST_TOPICS,
  RECEIVE_TOPICS,
  REQUEST_NODES,
  RECEIVE_NODES
} from '../actions';

function uiSwitch(state = {}, action) {
  const { type, page, topicsType, nodeId } = action;
  switch (type) {
    case UI_SWITCH:
      return {
        ...state,
        page,
        type: topicsType,
        nodeId
      };
    default:
      return state
  }
}

function topics(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TOPICS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        receivedAt: action.receivedAt
      };
    default:
      return state;
  }
}

function createSubReducer(state, action) {
}

function createReducer(reducerFunction, reducerName) {
  return (state, action) => {
    
  }
}

function nodes(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
    case REQUEST_NODES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NODES:
      return {
        ...state,
        isFetching: false,
        items: action.nodes,
        receivedAt: Date.now()
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  uiSwitch,
  topics,
  nodes
});

export default rootReducer;
