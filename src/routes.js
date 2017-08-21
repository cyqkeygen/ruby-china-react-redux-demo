import Home from './containers/Home';
import Topics from './containers/Topics';
import Topic from './containers/Topic';
import Headlines from './components/Headlines';
import Jobs from './components/Jobs';
import Sites from './components/Sites';
import Wiki from './components/Wiki';

const routes = [
  { path: '/', name: 'Ruby China', component: Home},
  { path: '/topics', strict: true, name: '社区', component: Topics},
  { path: '/topics/popular', strict: true, name: '', component: Topics},
  { path: '/topics/no_reply', strict: true, name: '', component: Topics},
  { path: '/topics/last', strict: true, name: '', component: Topics},
  { path: '/topics/jobs', strict: true,  name: '招聘', component: Topics},
  { path: '/topics/node:id', strict: true, name: '', component: Topics},
  { path: '/topics/:id', strict: true, name: '', component: Topic},
  { path: '/wiki', name: 'Wiki', component: Wiki},
  { path: '/sites', name: '酷站', component: Sites},
];

export default routes;
