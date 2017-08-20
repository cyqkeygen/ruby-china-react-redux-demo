import { combineReducers } from 'redux';
import { 
  UI_SWITCH,
  REQUEST_TOPICS,
  RECEIVE_TOPICS,
  REQUEST_NODES,
  RECEIVE_NODES,
  REQUEST_NODE,
  RECEIVE_NODE,
  REQUEST_TOPIC,
  RECEIVE_TOPIC,
  REQUEST_REPLIES,
  RECEIVE_REPLIES
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

/* function topicsWrapper(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  console.log(action)
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
        items: action.topics
      };
    default:
      return state;
  }
}

function topics(state = {}, action)  {
  switch (action.type) {
    case REQUEST_TOPICS:
    case RECEIVE_TOPICS:
      if (action.topicType) {
        return {
          ...state,
          [action.topicType]: topicsWrapper(state[action.topicType], action)
        }
      } else {
        return {
          ...state,
          [action.nodeId]: topicsWrapper(state[action.nodeId], action)
        }
      }
      
    default:
     return state;
  }
} */

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
        items: action.topics,
        receivedAt: action.receivedAt
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

function currentNode(state = {
  isFetching: false,
  node: {}
}, action) {
  switch (action.type) {
    case REQUEST_NODE:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NODE:
      return {
        ...state,
        isFetching: false,
        node: action.node,
        receivedAt: Date.now()
      }
    default:
     return state;
  } 
}

function currentTopic(state = {
  isFetching: false,
  topic: {}
}, action) {
  switch (action.type) {
    case REQUEST_TOPIC:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TOPIC:
      return {
        ...state,
        isFetching: false,
        receivedAt: Date.now(),
        topic: action.topic
      }
    default:
      return state;
  }
}

function replies(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_REPLIES:
      return {
        ...state,
        isFetching: true,
        topicId: action.topicId
      }
    case RECEIVE_REPLIES:
      return {
        ...state,
        isFetching: false,
        items: action.items,
        topicId: action.topicId
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  uiSwitch,
  topics,
  nodes,
  currentNode,
  currentTopic,
  replies
});

export default rootReducer;
