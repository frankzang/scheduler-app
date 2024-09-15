import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Heading,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import {
  Button,
  Calendar as ReactCalendar,
  CalendarCell,
  CalendarGrid,
  Heading as CalendarHeading,
  DateValue,
} from 'react-aria-components';
import { CalendarDate, today, getLocalTimeZone } from '@internationalized/date';

type CalendarProps = {
  onChange: (date: Date) => void;
  isDisabled?: boolean;
};

export const Calendar = ({ onChange, isDisabled }: CalendarProps) => {
  return (
    <Box
      as={ReactCalendar}
      aria-label="Data da consulta"
      minValue={today(getLocalTimeZone())}
      onChange={(evt: DateValue) => onChange(evt.toDate(getLocalTimeZone()))}
      isDisabled={isDisabled}
      width="100%"
      maxW="400px"
      margin="auto"
      pb="8"
    >
      <Flex
        as="header"
        width="100%"
        justifyContent="space-between"
        pb="8"
        paddingInline="4"
        sx={{
          'button[data-disabled]': {
            cursor: 'not-allowed',
            opacity: 0.5,
          },
        }}
      >
        <Heading
          as={CalendarHeading}
          size="md"
          display="block"
          _firstLetter={{
            textTransform: 'uppercase',
          }}
        />
        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton
            as={Button}
            slot="previous"
            aria-label="Mês anterior"
            icon={<ChevronLeftIcon boxSize={6} />}
          />
          <IconButton
            as={Button}
            slot="next"
            aria-label="Próximo mês"
            icon={<ChevronRightIcon boxSize={6} />}
          />
        </ButtonGroup>
      </Flex>
      <Box as={CalendarGrid} width="100%">
        {(date: CalendarDate) => (
          <Flex
            as={CalendarCell}
            date={date}
            justifyContent="center"
            alignItems="center"
            aspectRatio="1/1"
            borderRadius="100%"
            sx={{
              '&[data-outside-month]': {
                display: 'none',
              },

              '&[data-pressed]': {
                background: 'blue.200',
              },

              '&[data-focus-visible]': {
                outline: '2px solid',
                outlineColor: 'blue.200',
                outlineOffset: '2px',
                bg: 'blue.100',
                color: 'black',
              },

              '&[data-disabled]': {
                color: 'grey',
              },

              '&[data-selected]': {
                bg: 'blue.500',
                color: 'white',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};
