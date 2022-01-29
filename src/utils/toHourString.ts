export const toHourString = (val: number): string => {
  const secInHour = 3600;
  const hour = Math.floor(val / secInHour);

  if (hour < 12) {
    return `${hour} AM`;
  }

  if (hour === 12) {
    return `${hour} PM`;
  }

  return `${hour - 12} PM`;
};
