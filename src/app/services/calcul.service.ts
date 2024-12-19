import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  getnumberOf(list:any[],critaire:string,value:any){
    let n=0;
    for(let i in list){
      {
        if(list[i][critaire]===value){
          n++;
        }
      }
    }
    return n;

  }
}
