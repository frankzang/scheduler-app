import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Link as RRDLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack
          as="form"
          onSubmit={(event) => event.preventDefault()}
          spacing={4}
          align="stretch"
        >
          <Heading as="h1" size="lg" textAlign="center">
            Login
          </Heading>
          <Text textAlign="center" pb="4">
            Faça login para continuar sua consulta
          </Text>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Digite seu email" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input type="password" placeholder="Digite sua senha" />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="full">
            Entrar
          </Button>

          <Box textAlign="center">
            <Link as={RRDLink} to="/signin" color="blue.600" href="/signup">
              Criar uma conta
            </Link>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
