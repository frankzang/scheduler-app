import {
  Alert,
  AlertIcon,
  Center,
  Container,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Calendar } from '../components/calendar/calendar';
import { useState } from 'react';

export const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onDateChange = async (date: Date) => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <Container>
      <Heading as="h1" size="lg" paddingTop="8" pb="8" textAlign="center">
        Agendar consulta
      </Heading>
      <Text textAlign="center" pb="12">
        Selecione a melhor data para sua consulta
      </Text>
      <Calendar onChange={onDateChange} />
      {isLoading ? (
        <Center pb="8">
          <Alert status="info" variant="top-accent">
            <Spinner mr="4" color="blue.600" />
            Buscando horários disponíveis
          </Alert>
        </Center>
      ) : (
        hasError && (
          <Alert status="error" variant="top-accent">
            <AlertIcon />
            Não há horários disponíveis para esta data
          </Alert>
        )
      )}
    </Container>
  );
};
