import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { extendTheme } from '@chakra-ui/react';
import { ScheduleCacheProvider } from './context/schedule-cache-provider.tsx';
import { UserProvider } from "./context/user.tsx";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <ScheduleCacheProvider>
          <RouterProvider router={router} />
        </ScheduleCacheProvider>
      </UserProvider>
    </ChakraProvider>
  </StrictMode>
);
