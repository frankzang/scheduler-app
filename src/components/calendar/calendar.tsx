import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  ButtonGroup,
  IconButton,
  Text,
  HStack,
} from '@chakra-ui/react';
import {
  Button,
  Calendar as ReactCalendar,
  CalendarCell,
  CalendarGrid,
  Heading as CalendarHeading,
  DateValue,
  useLocale,
} from 'react-aria-components';
import {
  CalendarDate,
  today,
  getLocalTimeZone,
  isWeekend,
  fromDate,
} from '@internationalized/date';
import { useId } from 'react';

type CalendarProps = {
  onChange: (date: Date) => void;
  isDisabled?: boolean;
  date?: Date;
};
export const Calendar = ({ onChange, date, isDisabled }: CalendarProps) => {
  const availableId = useId();
  const unavailableId = useId();

  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  return (
    <Box>
      <Box
        as={ReactCalendar}
        aria-label="Data da consulta"
        defaultValue={date ? fromDate(date, getLocalTimeZone()) : undefined}
        minValue={today(getLocalTimeZone())}
        isDateUnavailable={isDateUnavailable}
        isDisabled={isDisabled}
        onChange={(evt: DateValue) => onChange(evt.toDate(getLocalTimeZone()))}
        width="100%"
        maxW="450px"
        margin="auto"
        pb="8"
        sx={{
          '.react-aria-CalendarCell': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: '1/1',
            borderRadius: '8',
            position: 'relative',
            fontWeight: 'bold',
          },

          '[data-unavailable], [data-disabled]': {
            color: 'grey',
            fontWeight: 'normal',
          },

          '[data-outside-month]': {
            display: 'none',
          },

          '[data-pressed]': {
            background: 'blue.200',
          },

          '[data-focus-visible]': {
            outline: '2px solid',
            outlineColor: 'blue.200',
            outlineOffset: '2px',
            bg: 'blue.100',
            color: 'black',
          },

          '[data-selected]': {
            bg: 'blue.500',
            color: 'white',
          },
        }}
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
          {(date: CalendarDate) => {
            return <CalendarCell date={date} />;
          }}
        </Box>
      </Box>
    </Box>
  );
};
