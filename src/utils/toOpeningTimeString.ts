import { Day, OpeningHoursData, Time } from '../models';
import { zip } from './zip';
import { toHourString } from './toHourString';
import { getNextDay } from './getNextDay';

const reducer = (acc: string, item: [Time, Time]): string => {
  const openFormattedVal = toHourString(item[0].value);
  const closeFormattedVal = toHourString(item[1].value);
  const openingTime = `${openFormattedVal} - ${closeFormattedVal}`;

  return acc ? acc + `, ${openingTime}` : openingTime;
};

const getEarliestCloseTime = (arr: Time[]): Time => {
  let minCloseTime;

  for (let time of arr) {
    if (time.type === 'close') {
      if (!minCloseTime || minCloseTime.value > time.value) {
        minCloseTime = time;
      }
    }
  }

  return minCloseTime as Time;
};

export const toOpeningTimeString = (day: Day, days: OpeningHoursData): string => {
  const dayHours = days[day];
  const isOverlap = dayHours.length % 2 !== 0;
  const openTimes = dayHours.filter(item => item.type === 'open').sort((a, b) => a.value - b.value);
  const closeTimes = dayHours
    .filter(item => item.type === 'close')
    .sort((a, b) => a.value - b.value);

  if (!isOverlap) {
    const zipped = zip(openTimes, closeTimes);
    return zipped.reduce(reducer, '');
  }

  if (closeTimes.length > openTimes.length) {
    const zipped = zip(openTimes, closeTimes.slice(1));
    return zipped.reduce(reducer, '');
  }

  // For case: closeTimes.length < openTimes.length
  // We need to get close time from next day (the earliest close time from the next day)
  const nextDay = days[getNextDay(day)];
  const nextDayEarliestCloseTime = getEarliestCloseTime(nextDay);
  const zipped = zip(openTimes, [...closeTimes, nextDayEarliestCloseTime]);

  return zipped.reduce(reducer, '');
};
