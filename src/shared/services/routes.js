import { fetchPopularRepos, fetchPost } from './api'
import Grid from '../components/Grid'
import DesignView from '../components/design_view';

const routes =  [
  {
    path: '/',
    exact: true,
    component: DesignView,
    fetchInitialData: (path = '') => fetchPost()
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
  {
    path: '/design',
    exact: true,
    component: DesignView,
    fetchInitialData: (path = '') => fetchPost()
  },
  {
    path: '/design/:service/:id',
    component: DesignView,
    fetchInitialData: (path = '') => fetchPost(path)
  },
]

export default routes