import { PropsWithChildren, useRef } from 'react';
import ScheduleCacheContext, {
  ScheduleCache,
  ScheduleCacheData,
} from './schedule-cache';

export const ScheduleCacheProvider = ({ children }: PropsWithChildren) => {
  const cache = useRef<ScheduleCacheData>({});

  const value: ScheduleCache = {
    cache: cache,
    setCacheEntry: (data: Partial<ScheduleCacheData>) => {
      cache.current = { ...cache.current, ...data };
    },
  };

  return (
    <ScheduleCacheContext.Provider value={value}>
      {children}
    </ScheduleCacheContext.Provider>
  );
};
