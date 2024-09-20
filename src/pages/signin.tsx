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
import { UserWithPassword } from '../model/user';

export const SigninPage = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const parsedUser = UserWithPassword.safeParse(formValues);

    if (parsedUser.success) {
      console.log(parsedUser.data);
    }
  };

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
          onSubmit={
            onSubmit as unknown as React.FormEventHandler<HTMLDivElement>
          }
          spacing={4}
          align="stretch"
        >
          <Heading as="h1" size="lg" paddingBottom="4" textAlign="center">
            Criar Conta
          </Heading>

          <FormControl id="firstName" isRequired>
            <FormLabel>Nome</FormLabel>
            <Input type="text" name="firstName" placeholder="Digite seu nome" />
          </FormControl>

          <FormControl id="lastName" isRequired>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              type="text"
              name="lastName"
              placeholder="Digite seu sobrenome"
            />
          </FormControl>

          <FormControl id="cpf" isRequired>
            <FormLabel>CPF</FormLabel>
            <Input type="text" name="cpf" placeholder="Digite seu CPF" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="Digite seu email" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Telefone</FormLabel>
            <Input
              type="tel"
              name="phone"
              placeholder="Digite seu número de telefone"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
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
