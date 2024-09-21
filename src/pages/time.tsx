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
  Box,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { FaUserDoctor } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useScheduleCache } from '../context/schedule-cache';
import { z } from 'zod';

const TimeData = z.object({
  professionalId: z.string(),
  time: z.string(),
});

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
  const { cache, setCacheEntry } = useScheduleCache();
  const navigate = useNavigate();
  const defaultOpenedPanelIndex = availableTimes.findIndex(
    (time) => time.professionalId === cache.current.professionalId
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const parsedTimeData = TimeData.safeParse(formValues);

    if (parsedTimeData.success) {
      setCacheEntry({
        professionalId: parsedTimeData.data.professionalId,
        time: parsedTimeData.data.time,
      });

      navigate('/confirmation');
      // navigate('/login');
    }
  };

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
      <Accordion defaultIndex={defaultOpenedPanelIndex}>
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
              <Box
                as="form"
                data-professional={time.professionalId}
                onSubmit={onSubmit}
              >
                <input
                  type="hidden"
                  name="professionalId"
                  value={time.professionalId}
                />
                <RadioGroup
                  aria-label={time.professionalName}
                  tabIndex={-1}
                  mb="4"
                  defaultValue={
                    time.professionalId === cache.current.professionalId
                      ? cache.current.time
                      : ''
                  }
                >
                  {time.times.map((option, index) => {
                    return (
                      <Radio
                        key={index}
                        value={option}
                        autoFocus
                        mr="8"
                        mb="4"
                        name="time"
                        isRequired
                      >
                        {option}
                      </Radio>
                    );
                  })}
                </RadioGroup>
                <Button
                  type="submit"
                  colorScheme="blue"
                  width="100%"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Agendar
                </Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};
