## 0. Initialize yarn
  `yarn init`
## 1. Install Babel Dependences
  `yarn add babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 --no-progress -D`
## 2. Install webpack && webpack loaders
  `yarn add webpack css-loader sass-loader node-sass style-loader file-loader postcss-loader url-loader -D --no-progress`
## 3. Install webpack plugins
  `yarn add webpack-dashboard html-webpack-plugin extract-text-webpack-plugin webpack-dev-server  -D --no-progress`
## 4. Install react dependences
  `yarn add react react-redux redux react-router-dom redux-logger redux-thunk prop-types --no-progress`

``
state = {
  userLogin: false,
  currentUser: {},
  uiSwitch: {
    page: 'home',
    type: 'excellent',
    nodeId: 1,
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
    nodeId: 1,
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
  statistics: {
    members: 32461,
    topicCount: 33652,
    replyCount: 327483,
  },
  nodes: [],
}
``
