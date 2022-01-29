import { FC } from 'react';
import './App.css';
import { OpeningHours } from '../OpeningHours';

interface Props {}

export const App: FC<Props> = () => {
  return (
    <div className="App">
      <OpeningHours />
    </div>
  );
};
