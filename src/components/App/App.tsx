import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { OpeningHours } from '../OpeningHours';
import { NotFound } from '../NotFound';

interface Props {}

export const App: FC<Props> = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OpeningHours />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
