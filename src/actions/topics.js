export const REQUEST_TOPIC = 'REQUEST_TOPIC';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export function requestTopic() {
  return {
    type: REQUEST_TOPIC
  }
}

export function receiveTopic(topic) {
  return {
    type: RECEIVE_TOPIC,
    topic
  }
}

export function fetchTopic(topicId) {
  return function(dispatch, getState) {
    dispatch(requestTopic());
    const url = `https://ruby-china.org/api/v3/topics/${topicId}`;
    fetch(url)
      .then(res => res.json())
      .then(json => dispatch(receiveTopic(json.topic)))
  }
}
