import fetch from 'isomorphic-fetch';
import { createActions } from 'redux-actions';

export const UI_SWITCH = 'UI_SWITCH';
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const REQUEST_NODES = 'REQUEST_NODES';
export const RECEIVE_NODES = 'RECEIVE_NODES';
export const REQUEST_NODE = 'REQUEST_NODE';
export const RECEIVE_NODE = 'RECEIVE_NODE';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const requestTopicsUrl = 'https://ruby-china.org/api/v3/topics';
const requestNodesUrl = 'https://ruby-china.org/api/v3/nodes';

/* export const {
  selectPage,
} = createActions({
  SELECT_PAGE: page => ({ page }),
}); */

// useless
export function uiSwitch(ui = {
  page: 'home',
  type: 'excellent',
  nodeId: -1,
}) {
  const { page, type, nodeId } = ui;
  return {
    type: UI_SWITCH,
    page,
    topicsType: type,
    nodeId
  };
}

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function receiveTopics(topics = []) {
  return {
    type: RECEIVE_TOPICS,
    topics,
    receivedAt: Date.now()
  };
}

const getUrl = (match, options) => {
  const { params } = match;
  const { sub } = params;
  const { offset, limit } = options;
  const defaultUrl = requestTopicsUrl + `?limit=${limit}&offset=${offset}`;
  if (!sub) return defaultUrl;
  if (sub.startsWith('node')) {
    const nodeId = sub.slice(4);
    return requestTopicsUrl + `?limit=${limit}&offset=${offset}&node_id=${nodeId}`;
  }
  const types = ['popular', 'no_reply', 'recent', 'excellent'];
  if (types.indexOf(sub) >= 0) {
    return requestTopicsUrl + `?limit=${limit}&offset=${offset}&type=${sub}`;
  } else {
    return defaultUrl;
  }
}

export const fetchTopics = (match, options = {
  limit: 25,
  offset: 0
})  => (dispatch, getState) => {
  const url = getUrl(match, options);
  console.log(url)
  dispatch(requestTopics());
  fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveTopics(json.topics)));
}

export const fetchExcellentTopics = (options = {
  offset: 0,
  limit: 20
}) => {
  const match = {
    params: {
      sub: 'excellent'
    }
  };
  return fetchTopics(match, options);
}

export const requestNodes = () => {
  return {
    type: REQUEST_NODES,
  }
}

export const receiveNodes = (nodes) => {
  return {
    type: RECEIVE_NODES,
    nodes,
    receivedAt: Date.now()
  }
}

export const fetchNodes = () => (dispatch, getState) => {
  dispatch(requestNodes());
  fetch(requestNodesUrl)
    .then(res => res.json())
    .then(json => dispatch(receiveNodes(json.nodes)))
}

export const requestNode = () => {
  return {
    type: REQUEST_NODE
  }
}

export const receiveNode = (node) => {
  return {
    type: RECEIVE_NODE,
    node
  }
}
export const fetchNode = (nodeId) => (dispatch, getState) => {
  dispatch(requestNode());
  const url = `https://ruby-china.org/api/v3/nodes/${nodeId}`;
  fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveNode(json.node)))
}
