import fetch from 'isomorphic-fetch';

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const requestTopicUrl = `https://ruby-china.org/api/v3/topics`;

export function requestTopics(topicType) {
  return {
    type: REQUEST_TOPICS,
    topicType 
  }
}

export function receiveTopics(topicType, topics) {
  return {
    type: RECEIVE_TOPICS,
    topicType,
    topics,
    receivedAt: Date.now()
  }
}

export function fetchTopics(topicType) {
  return dispatch => {
    dispatch(requestTopics(topicType));
    fetch(requestTopicUrl + `?type=${topicType}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        dispatch(receiveTopics(topicType, json.topics))
      });
  }
}

export function fetchTopicsAsync(topicType) {
  return async function(dispatch) {
    dispatch(requestTopics(topicType));
    const response = await fetch(requestTopicUrl + `?type=${topicType}`);
    console.log(response);
    dispatch(receiveTopics(topicType, response.json.topics));
  }
}

export function shouldFetchTopics(state, topicType){
  if (!topics) {
    return true
  }
}
