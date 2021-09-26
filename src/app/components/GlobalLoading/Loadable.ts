/**
 *
 * Asynchronously loads the component for GlobalLoading
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GlobalLoading = lazyLoad(
  () => import('./index'),
  module => module.GlobalLoading,
);
