import { createBrowserRouter } from 'react-router-dom';
import { CalendarPage } from './pages/calendar';
import { TimePage } from './pages/time';
import { LoginPage } from './pages/login';
import { SigninPage } from './pages/signin';
import { ConfirmationPage } from './pages/confirmation';
import { AppointmentsPage } from './pages/appointments';
import { Layout } from "./components/layout/layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CalendarPage />
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
      {
        path: '/appointments',
        element: <AppointmentsPage />,
      },
    ],
  },
]);
