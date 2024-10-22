import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Badge, Heading, Container } from '@chakra-ui/react';
import { Helmet } from "react-helmet";

const appointments = [
  {
    date: '2024-10-22',
    time: '14:30',
    doctor: 'Dr. João Silva',
    approved: true,
  },
  {
    date: '2024-10-23',
    time: '10:00',
    doctor: 'Dra. Maria Oliveira',
    approved: false,
  },
  {
    date: '2024-10-24',
    time: '09:15',
    doctor: 'Dr. Carlos Souza',
    approved: true,
  },
];

export const AppointmentsPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Minhas consultas</title>
      </Helmet>
      <Heading as="h1" size="lg" paddingTop="8" pb="8" textAlign="center">
        Minhas consultas
      </Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>Hora</Th>
              <Th>Médico</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointments.map((appointment, index) => (
              <Tr key={index}>
                <Td>{appointment.date}</Td>
                <Td>{appointment.time}</Td>
                <Td>{appointment.doctor}</Td>
                <Td>
                  <Badge colorScheme={appointment.approved ? 'green' : 'red'}>
                    {appointment.approved ? 'Aprovado' : 'Não Aprovado'}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
