import AuthLayout from 'app/layouts/Auth';
import { DashboardLayout } from 'app/layouts/Dashboard';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { Login } from 'app/pages/Login/Loadable';
// restricted: Nếu đã đang nhập rồi thì
// khi quay lại login sẽ vị redirect đến dashboard
// restricted = false meaning public route
// restricted = true meaning restricted route

export const DASHBOARD_ROUTES = [
  {
    path: '/',
    name: 'Dashboard',
    exact: true,
    layout: DashboardLayout,
    component: HomePage,
  },
];

export const AUTH_ROUTES = [
  {
    path: '/auth/login',
    name: 'Login',
    exact: true,
    layout: AuthLayout,
    component: Login,
    restricted: true,
  },
];
