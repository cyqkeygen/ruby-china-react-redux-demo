import { combineReducers } from 'redux';
import { REQUEST_TOPICS, RECEIVE_TOPICS } from '../actions';

const topicTypeMap = {
  excellent: 'excellentTopics',
}

function topics(state = {
  isFetching: false,
  didInvalidate: false,
  topics: [],
  offset: 0,
  limit: 20
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
        topics: action.topics,
        lastUpdated: Date.now()
      };
    default:
      return state;
  }
}

// unused
function topicsByType(state = {}, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
    case RECEIVE_TOPICS:
      return {
        ...state,
        [action.topicType]: topics(state[action.topicType], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  excellentTopics: topics
});

export default rootReducer;
