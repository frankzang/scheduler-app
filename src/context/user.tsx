import { createContext, useContext, PropsWithChildren } from 'react';

type User = {
  name: string;
};

type UserContextType = {
  user: User | null;
};
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used inside UserProvider');

  return context;
};

export const UserProvider = ({ children }: PropsWithChildren) => {
    return (
      <UserContext.Provider value={{ user: null }}>
        {children}
      </UserContext.Provider>
    );
} 
