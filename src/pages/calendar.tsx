import { Container, Heading, Text } from '@chakra-ui/react';
import { Calendar } from '../components/calendar/calendar';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useScheduleCache } from '../context/schedule-cache';

export const CalendarPage = () => {
  const navigate = useNavigate();
  const { cache, setCacheEntry } = useScheduleCache();

  const onDateChange = async (date: Date) => {
    setCacheEntry({ date });
    navigate('/horarios');
  };

  return (
    <Container>
      <Helmet>
        <title>Agendar consulta</title>
      </Helmet>
      <Heading as="h1" size="lg" paddingTop="8" pb="8" textAlign="center">
        Agendar consulta
      </Heading>
      <Text textAlign="center" pb="12">
        Selecione a melhor data para sua consulta
      </Text>
      <Calendar date={cache.current.date} onChange={onDateChange} />
    </Container>
  );
};
