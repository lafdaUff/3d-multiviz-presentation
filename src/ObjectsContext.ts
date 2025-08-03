
import { createContext } from 'react';
import { type ModelData } from './components/viewport/Experience';

const ObjectsContext = createContext<{
  currentObjects: ModelData[];
  setCurrentObjects: React.Dispatch<React.SetStateAction<ModelData[]>>;
}>({
  currentObjects: [],
  setCurrentObjects: () => {},
});

export default ObjectsContext;
