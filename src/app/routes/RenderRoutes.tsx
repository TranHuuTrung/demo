import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import PrivateRoute from 'app/components/PrivateRoute';
import PublicRoute from 'app/components/PublicRoute';
import { useCallback, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AUTH_ROUTES, DASHBOARD_ROUTES } from './index';

export const RenderRoutes = () => {
  const loggedRoutes = useMemo(() => {
    return [...DASHBOARD_ROUTES];
  }, []);

  const renderLoggedRoutes = useCallback(() => {
    return loggedRoutes.map(route => {
      return <PrivateRoute key={route.path} {...route} />;
    });
  }, [loggedRoutes]);

  const renderAuthRoutes = useCallback(() => {
    return AUTH_ROUTES.map(route => {
      return <PublicRoute key={route.path} {...route} />;
    });
  }, []);

  return (
    <Switch>
      {renderLoggedRoutes()}
      {renderAuthRoutes()}
      <Route component={NotFoundPage} />
    </Switch>
  );
};
