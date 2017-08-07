import { combineReducers } from 'redux';
import { 
  SELECT_PAGE,
  REQUEST_TOPICS_BY_TYPE,
  RECEIVE_TOPICS_BY_TYPE,
  REQUEST_TOPICS_BY_NODE,
  RECEIVE_TOPICS_BY_NODE,
} from '../actions';

function selectPage(state = 'home', action) {
  switch (action.type) {
    case SELECT_PAGE:
      return action.page;
    default:
      return state
  }
}

function topics(state = {
  isFetching: false,
  didInvalidate: false,
  topics: [],
  offset: 0,
  limit: 20
}, action) {
  switch (action.type) {
    case REQUEST_TOPICS_BY_TYPE:
    case REQUEST_TOPICS_BY_NODE:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TOPICS_BY_TYPE:
    case RECEIVE_TOPICS_BY_NODE:
      return {
        ...state,
        isFetching: false,
        topics: action.topics,
        lastUpdated: Date.now()
      };
    default:
      return state;
  }
}

function createSubReducer(state, action) {
}

/*
 * action = {type: REQUEST_TOPICS_BY_TYPE, topicType: 'excellent'}
 * action = {type: RECEIVE_TOPICS_BY_TYPE, topicType: 'excellent', topics: []}
 * */
function topicsByType(state = {}, action) {
  switch (action.type) {
    case REQUEST_TOPICS_BY_TYPE:
    case RECEIVE_TOPICS_BY_TYPE:
      return {
        ...state,
        [action.topicType]: topics(state[action.topicType], action)
      };
    default:
      return state;
  }
}

/* 
 *  action = {type: REQUEST_TOPICS_BY_NODE, nodeId: 1}
 *  action = {type: RECEIVE_TOPICS_BY_NODE, nodeId: 1, topics: []}
 * */
function topicsByNode(state = {}, action) {
  switch (action.type) {
    case REQUEST_TOPICS_BY_NODE:
    case RECEIVE_TOPICS_BY_NODE:
      return {
        ...state,
        [action.nodeId]: topics(state[action.nodeId], action)
      }
      break;
    
    default:
      
  } 
}

function createReducer(reducerFunction, reducerName) {
  return (state, action) => {
    
  }
}
function types(state = {}, action) {
  switch(action.type) {
    case REQUEST_TOPICS_BY_TYPE:
    case RECEIVE_TOPICS_BY_TYPE:
      return {
        ...state,
        [action.topicsType]: topics(state[action.topicsType], action)
      };
    default:
      return state;
  }
}

function nodes(state = {}, action) {
  switch (action.type) {
    case REQUEST_TOPICS_BY_NODE:
    case RECEIVE_TOPICS_BY_NODE:
      return {
        ...state,
        [action.nodeId]: topics(state[action.nodeId], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectPage,
  types,
  nodes
});

export default rootReducer;
