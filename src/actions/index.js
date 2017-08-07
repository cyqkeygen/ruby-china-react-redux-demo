import fetch from 'isomorphic-fetch';
import { createActions } from 'redux-actions';

export const SELECT_PAGE = 'SELECT_PAGE';
export const REQUEST_TOPICS_BY_TYPE = 'REQUEST_TOPICS_BY_TYPE';
export const RECEIVE_TOPICS_BY_TYPE = 'RECEIVE_TOPICS_BY_TYPE';
export const REQUEST_TOPICS_BY_NODE = 'REQUEST_TOPICS_BY_NODE';
export const RECEIVE_TOPICS_BY_NODE = 'RECEIVE_TOPICS_BY_NODE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
const requestTopicsUrl = `https://ruby-china.org/api/v3/topics`;

/* export const {
  selectPage,
} = createActions({
  SELECT_PAGE: page => ({ page }),
}); */

/*  
 *  page enum ['home', 'topics','jobs']
 *  */
export function selectPage(page) {
  return {
    type: SELECT_PAGE,
    page
  }
}

function identifyPositive(nodeId) {
  return typeof nodeId === 'number' && nodeId > 0;
}

export function requestTopics(options = {
  type: 'defalut',
  nodeId: -1
}) {
  const { type, nodeId } = options;
  if (identifyPositive(nodeId)) {
    return {
      type: REQUEST_TOPICS_BY_NODE,
      nodeId: nodeId
    }
  } else {
    return {
      type: REQUEST_TOPICS_BY_TYPE,
      topicsType: type
    }
  }
}

export function receiveTopics(options = {
  type: 'default',
  nodeId: -1,
  topics: []
}) {
  const { type, nodeId, topics } = options;
  if (topics.length <= 0) return;
  if (identifyPositive(nodeId)) {
    return {
      type: RECEIVE_TOPICS_BY_NODE,
      nodeId,
      topics,
      receiveAt: Date.now()
    }
  } else {
    return {
      type: RECEIVE_TOPICS_BY_TYPE,
      topicsType: type,
      topics,
      receivedAt: Date.now()
    }
  }
  return {
    type: RECEIVE_TOPICS,
    page,
    topics,
    receivedAt: Date.now()
  }
}

const urlPayload = (type, nodeId = -1, options = {
  limit: 25,
  offset: 0
}) => {
  const { limit, offset } = options;
  const defaultPayload = `?limit=${limit}&offset=${offset}`;
  if (identifyPositive(nodeId)) {
    return defaultPayload + `&node_id=${nodeId}`;
  } else {
    return defaultPayload + `&type=${type}`;
  }
}

export const fetchTopics = (page = 'home', topicsInfo, options = {
  limit: 25,
  offset: 0
})  => (dispatch, getState) => {
  const { type, nodeId } = topicsInfo;
  const url = requestTopicsUrl + urlPayload(type, nodeId, options);
  dispatch(selectPage(page));
  dispatch(requestTopics({type, nodeId}));
  fetch(url)
    .then(res => res.json())
    .then(json => {
      dispatch(receiveTopics({
        nodeId,
        type,
        topics: json.topics
      }));
    }
    );
}
