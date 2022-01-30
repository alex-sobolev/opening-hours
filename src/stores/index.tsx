import { FC, createContext, useContext } from 'react';
import { OpeningHoursStore, OpeningHoursStoreProps } from './OpeningHoursStore';

export interface StoreContextProps {
  openingHoursStore: OpeningHoursStoreProps;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export const StoreProvider: FC = ({ children }) => {
  const store = {
    openingHoursStore: new OpeningHoursStore(),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
  return useContext(StoreContext);
};
