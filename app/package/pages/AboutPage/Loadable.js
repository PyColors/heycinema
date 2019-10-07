/**
 * Asynchronously loads the component for AboutPage
 */
import Loadable from 'react-loadable';

import Loading from '../../components/molecules/Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});
