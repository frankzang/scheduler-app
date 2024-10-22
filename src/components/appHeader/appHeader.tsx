import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useUser } from '../../context/user';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box as="header" bg="blue.500" color="white" px="4" py="3">
      <Flex alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Clínica
        </Text>
        <Spacer />
        <HStack spacing="4" display={{ base: 'none', md: 'flex' }}>
          <Button
            variant="ghost"
            colorScheme="white"
            _hover={{ bg: 'blue.600' }}
            onClick={() => navigate('/')}
          >
            Agendar
          </Button>
          <Button
            variant="ghost"
            colorScheme="white"
            _hover={{ bg: 'blue.600' }}
            onClick={() => navigate('/appointments')}
          >
            Meus Agendamentos
          </Button>
          {user ? (
            <Button
              variant="outline"
              colorScheme="white"
              _hover={{ bg: 'blue.600' }}
            >
              Sair
            </Button>
          ) : (
            <Button
              variant="outline"
              colorScheme="white"
              _hover={{ bg: 'blue.600' }}
              onClick={() => navigate('/login')}
            >
              Entrar
            </Button>
          )}
        </HStack>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'blue.600' }}
        />
      </Flex>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4">
              <Button
                w="full"
                variant="ghost"
                onClick={() => {
                  onClose();
                  navigate('/');
                }}
              >
                Agendar
              </Button>
              <Button
                w="full"
                variant="ghost"
                onClick={() => {
                  onClose();
                  navigate('/appointments');
                }}
              >
                Meus Agendamentos
              </Button>
              {user ? (
                <Button
                  variant="outline"
                  colorScheme="white"
                  _hover={{ bg: 'blue.600' }}
                >
                  Sair
                </Button>
              ) : (
                <Button
                  variant="outline"
                  colorScheme="blue"
                  onClick={() => {
                    onClose();
                    navigate('/login');
                  }}
                >
                  Entrar
                </Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
