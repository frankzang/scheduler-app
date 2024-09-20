import { createBrowserRouter } from 'react-router-dom';
import { CalendarPage } from './pages/calendar';
import { TimePage } from './pages/time';
import { LoginPage } from './pages/login';
import { SigninPage } from './pages/signin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
  },
  {
    path: '/horarios',
    element: <TimePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
]);
