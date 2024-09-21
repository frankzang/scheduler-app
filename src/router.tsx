import { createBrowserRouter } from 'react-router-dom';
import { CalendarPage } from './pages/calendar';
import { TimePage } from './pages/time';
import { LoginPage } from './pages/login';
import { SigninPage } from './pages/signin';
import { ConfirmationPage } from './pages/confirmation';

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
  {
    path: '/confirmation',
    element: <ConfirmationPage />,
  },
]);
