import { createContext } from 'react';

export const StateContext = createContext({
  query: '',
  search: '',
  data: [],
  isLoading: false,
  setQuery: () => {},
  setSearch: () => {},
  setData: () => {},
  setIsLoading: () => {},
});