import Home from './containers/Home';
import Topics from './containers/Topics';
import Headlines from './components/Headlines';
import Jobs from './components/Jobs';
import Sites from './components/Sites';
import Wiki from './components/Wiki';

const routes = [
  { path: '/', name: 'Ruby China', component: Home, isFirst: true },
  { path: '/topics', name: '社区', component: Topics},
  // { path: '/headlines', name: '头条', component: Headlines},
  { path: '/jobs', name: '招聘', component: Jobs},
  { path: '/wiki', name: 'Wiki', component: Wiki},
  { path: '/sites', name: '酷站', component: Sites},
];

export default routes;
