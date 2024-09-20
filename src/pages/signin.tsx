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

export const SigninPage = () => {
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
          <Heading as="h1" size="lg" paddingBottom="4" textAlign="center">
            Criar Conta
          </Heading>

          <FormControl id="firstName" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input type="text" placeholder="Digite seu nome" />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel>Sobrenome</FormLabel>
            <Input type="text" placeholder="Digite seu sobrenome" />
          </FormControl>

          <FormControl id="cpf" isRequired>
            <FormLabel>CPF</FormLabel>
            <Input type="text" placeholder="Digite seu CPF" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Digite seu email" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input type="password" placeholder="Digite sua senha" />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" width="full">
            Criar Conta
          </Button>

          <Box textAlign="center">
            <Text>
              Já tem uma conta?{' '}
              <Link as={RRDLink} to="/login" color="blue.600">
                Faça login
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
