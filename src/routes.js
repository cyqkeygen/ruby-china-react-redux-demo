import Home from './containers/Home';
import Topics from './containers/Topics';
import Headlines from './components/Headlines';
import Jobs from './components/Jobs';
import Sites from './components/Sites';
import Wiki from './components/Wiki';

const routes = [
  { path: '/', name: 'Ruby China', component: Home},
  { path: '/topics', strict: true, name: '社区', component: Topics},
  { path: '/topics/:sub', strict: true, name: '', component: Topics},
  { path: '/jobs', name: '招聘', component: Topics},
  { path: '/wiki', name: 'Wiki', component: Wiki},
  { path: '/sites', name: '酷站', component: Sites},
];

export default routes;
