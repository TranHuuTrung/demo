import { selectAuth } from 'app/pages/Login/slice/selectors';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {
  layout: any;
  component: any;
  restricted: boolean;
  exact: boolean;
  name: string;
  path: string;
}

function PublicRoute({
  restricted,
  layout: YourLayout,
  component: YourComponent,
  ...rest
}: PublicRouteProps) {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated && restricted ? (
          <Redirect to="/" />
        ) : (
          <YourLayout {...rest}>
            {YourComponent && <YourComponent {...routeProps} />}
          </YourLayout>
        )
      }
    />
  );
}

export default PublicRoute;
