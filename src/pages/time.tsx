import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Heading,
  Icon,
  Radio,
  RadioGroup,
  Text,
  Button,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { FaUserDoctor } from 'react-icons/fa6';

type AvailableTime = {
  professionalName: string;
  professionalId: string;
  times: string[];
};

const availableTimes: AvailableTime[] = [
  {
    professionalName: 'Dr. João Silva',
    professionalId: 'joao-silva',
    times: ['08:00', '09:00', '10:00', '11:00'],
  },
  {
    professionalName: 'Dra. Maria Souza',
    professionalId: 'maria-souza',
    times: ['13:00', '14:00', '15:00', '16:00'],
  },
  {
    professionalName: 'Dr. Pedro Oliveira',
    professionalId: 'pedro-oliveira',
    times: ['08:00', '09:00', '10:00', '11:00'],
  },
  {
    professionalName: 'Dra. Ana Santos',
    professionalId: 'ana-santos',
    times: ['13:00', '14:00', '15:00', '16:00'],
  },
];

export const TimePage = () => {
  return (
    <Container>
      <Helmet>
        <title>Horários disponíveis</title>
      </Helmet>
      <Heading as="h1" size="lg" paddingTop="8" pb="8" textAlign="center">
        Horários disponíveis
      </Heading>
      <Text textAlign="center" pb="12">
        Selecione o melhor horário para sua consulta
      </Text>
      <Accordion defaultIndex={[0]}>
        {availableTimes.map((time) => (
          <AccordionItem
            key={time.professionalId}
            border="1px solid"
            borderColor="blackAlpha.100"
            borderBottom="none"
            _last={{
              borderBottom: '1px solid',
              borderBottomColor: 'blackAlpha.100',
            }}
          >
            <h2>
              <AccordionButton _expanded={{ bg: 'blue.100' }} mb="2">
                <Icon as={FaUserDoctor} color="blue.600" mr="8" />
                <Text as="span" flex="1" textAlign="left" fontSize="lg">
                  {time.professionalName}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                aria-label={time.professionalName}
                tabIndex={-1}
                mb="4"
              >
                {time.times.map((option, index) => (
                  <Radio key={index} value={option} autoFocus mr="8" mb="4">
                    {option}
                  </Radio>
                ))}
              </RadioGroup>
              <Button
                colorScheme="blue"
                width="100%"
                rightIcon={<ArrowForwardIcon />}
              >
                Agendar
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};
