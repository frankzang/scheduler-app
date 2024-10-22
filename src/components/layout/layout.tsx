import { Flex } from '@chakra-ui/react';
import { AppHeader } from '../appHeader/appHeader';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Flex direction="column">
      <AppHeader />
      <Outlet />
    </Flex>
  );
};
