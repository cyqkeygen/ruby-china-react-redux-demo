import Home from '../containers/Home';
import Topics from './Topics';
import Headlines from './Headlines';
import Jobs from './Jobs';
import Sites from './Sites';
import Wiki from './Wiki';

const routes = [
  { path: '/', name: '首页', component: Home},
  { path: '/topics', name: '社区', component: Topics},
  { path: '/headlines', name: '头条', component: Headlines},
  { path: '/jobs', name: '招聘', component: Jobs},
  { path: '/wiki', name: 'Wiki', component: Wiki},
  { path: '/sites', name: '酷站', component: Sites},
];

export default routes;
