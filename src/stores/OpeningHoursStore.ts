import { makeAutoObservable } from 'mobx';
import { ApiStatus, OpeningHoursData } from '../models';
import testData from './testData.json';

const defaultData = testData as OpeningHoursData;

const delayPromise = (ms: number, data: OpeningHoursData) => {
  return new Promise(resolve => setTimeout(() => resolve(data), ms));
};

export interface OpeningHoursStoreProps {
  apiStatus: ApiStatus;
  data: OpeningHoursData;
  fetchData: () => Promise<void>;
}

export class OpeningHoursStore implements OpeningHoursStoreProps {
  apiStatus = ApiStatus.Idle;
  data = {} as OpeningHoursData;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    try {
      this.apiStatus = ApiStatus.Loading;

      const res = (await delayPromise(1000, defaultData)) as OpeningHoursData;

      this.data = res;
      this.apiStatus = ApiStatus.Success;
    } catch (err) {
      this.apiStatus = ApiStatus.Error;
    }
  };
}
