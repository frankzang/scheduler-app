import { createBrowserRouter } from 'react-router-dom';
import { CalendarPage } from './pages/calendar';
import { TimePage } from './pages/time';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
  },
  {
    path: '/horarios',
    element: <TimePage />,
  },
]);
