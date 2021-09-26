/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { GlobalLoading } from './components/GlobalLoading/Loadable';
import { RenderRoutes } from './routes/RenderRoutes';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Demo app"
        defaultTitle="Demo app"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Demo app" />
      </Helmet>

      <RenderRoutes />
      <GlobalLoading />
    </BrowserRouter>
  );
}
