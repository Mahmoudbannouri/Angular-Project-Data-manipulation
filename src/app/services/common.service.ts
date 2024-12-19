import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  constructor() {}

  // Get the count of items in a list that match a specific criteria
  getSameValueOf(list: any[], criteria: string, value: any): number {
    return list.filter(item => item[criteria] === value).length;
  }
}
