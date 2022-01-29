import { Day } from '../models';

const days: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const map = new Map<Day, Day>();

map.set('monday', 'tuesday');
map.set('tuesday', 'wednesday');
map.set('wednesday', 'thursday');
map.set('thursday', 'friday');
map.set('friday', 'saturday');
map.set('saturday', 'sunday');
map.set('sunday', 'monday');

export const getNextDay = (day: Day): Day => map.get(day) as Day;
