import { combineReducers } from 'redux';
import { 
  UI_SWITCH,
  REQUEST_TOPICS_BY_TYPE,
  RECEIVE_TOPICS_BY_TYPE,
  REQUEST_TOPICS_BY_NODE,
  RECEIVE_TOPICS_BY_NODE,
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

function topicsByType(state = {}, action) {
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

function topicsByNode(state = {}, action) {
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
  topicsByType,
  topicsByNode,
  nodes
});

export default rootReducer;
