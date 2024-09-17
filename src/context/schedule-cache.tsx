import { createContext, useContext } from 'react';

export type ScheduleCache = {
  date: Date;
  setDate: (date: Date) => void;
};

const ScheduleCacheContext = createContext<ScheduleCache | undefined>(
  undefined
);

export default ScheduleCacheContext;

export const useScheduleCache = () => {
  const context = useContext(ScheduleCacheContext);
  if (context === undefined) {
    throw new Error(
      'useScheduleCache must be used within a ScheduleCacheProvider'
    );
  }

  return context;
};
