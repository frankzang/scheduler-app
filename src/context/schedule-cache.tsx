import { createContext, useContext } from 'react';

export type ScheduleCacheData = {
  date?: Date;
  time?: string;
  professionalId?: string;
};

export type ScheduleCacheMethods = {
  setCacheEntry: (data: Partial<ScheduleCacheData>) => void;
};

export type ScheduleCache = {
  cache: React.MutableRefObject<ScheduleCacheData>;
} & ScheduleCacheMethods;

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
