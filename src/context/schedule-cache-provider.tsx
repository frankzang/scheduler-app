import { PropsWithChildren, useRef } from 'react';
import ScheduleCacheContext, { ScheduleCache } from './schedule-cache';

export const ScheduleCacheProvider = ({ children }: PropsWithChildren) => {
  const cache = useRef<ScheduleCache>({
    date: new Date(),
    setDate: (date: Date) => {
      cache.current.date = date;
    },
  });

  return (
    <ScheduleCacheContext.Provider value={cache.current}>
      {children}
    </ScheduleCacheContext.Provider>
  );
};
