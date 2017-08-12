``
state = {
  userLogin: false,
  currentUser: {},
  uiSwitch: {
    page: 'home',
    type: 'excellent',
    nodeId: -1,
  },
  topicsByType: {
    excellent: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    popular: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    no_reply: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    last: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
  },
  topicsByNode: {
    '12': {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      limit: 0,
      limit: 20
    }
  },
  currentNode: {},
  currentTopic: {},
  currentTopicReplies: [],
  statistics: {
    members: 32461,
    topicCount: 33652,
    replyCount: 327483,
  },
  nodes: [],
}
``
OR
``
state = {
  userLogin: false,
  currentUser: {},
  uiSwitch: {
    page: 'home',
    type: 'excellent',
    nodeId: -1,
  },
  types: {
    excellent: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    popular: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    no_reply: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
    last: {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      offset: 0,
      limit: 20
    },
  nodes: {
    '12': {
      isFetching: false,
      didInvalidate: false,
      topics: [],
      limit: 0,
      limit: 20
    }
  },
  currentTopic: {},
  currentTopicReplies: [],
  currentNode: {},
  statistics: {
    members: 32461,
    topicCount: 33652,
    replyCount: 327483,
  },
  nodes: [],
}
``
