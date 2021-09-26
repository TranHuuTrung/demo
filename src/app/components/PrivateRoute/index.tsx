import { selectAuth } from 'app/pages/Login/slice/selectors';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  layout: any;
  component: any;
  exact: boolean;
  name: string;
  path: string;
}

function PrivateRoute({
  layout: YourLayout,
  component: YourComponent,
  ...rest
}: PrivateRouteProps) {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return isAuthenticated ? (
          <YourLayout {...rest}>
            {YourComponent && <YourComponent {...routeProps} />}
          </YourLayout>
        ) : (
          <Redirect to="/auth/login" />
        );
      }}
    />
  );
}

export default PrivateRoute;
