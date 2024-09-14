import { createBrowserRouter } from 'react-router-dom';
import { CalendarPage } from './pages/calendar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
  },
]);
