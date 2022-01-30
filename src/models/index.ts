export type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type TimeType = 'open' | 'close';

export interface Time {
  type: TimeType;
  value: number;
}

export interface OpeningHoursData {
  monday: Time[];
  tuesday: Time[];
  wednesday: Time[];
  thursday: Time[];
  friday: Time[];
  saturday: Time[];
  sunday: Time[];
}

export enum ApiStatus {
  Idle,
  Loading,
  Success,
  Error,
}
