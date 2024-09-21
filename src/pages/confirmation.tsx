import { Box, Button, VStack, Text, Divider } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useScheduleCache } from '../context/schedule-cache';

export const ConfirmationPage = () => {
  const { cache } = useScheduleCache();

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Confirmação de Agendamento
        </Text>

        <Divider />

        {cache.current.date && (
          <Text fontSize="lg">
            <strong>Data:</strong> {format(cache.current.date, 'dd/MM/yyyy')}
          </Text>
        )}

        {cache.current.time && (
          <Text fontSize="lg">
            <strong>Horário:</strong> {cache.current.time}
          </Text>
        )}

        {cache.current.professionalId && (
          <Text fontSize="lg">
            <strong>Profissional:</strong> {cache.current.professionalId}
          </Text>
        )}

        <Divider />

        <Button colorScheme="blue" size="lg" width="full">
          Confirmar
        </Button>
      </VStack>
    </Box>
  );
};
