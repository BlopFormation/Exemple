import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  static nbInstance: number = 0;
  constructor() {
    LogService.nbInstance++;
  }

  ToSay(msg: string){
    console.log(msg);
  }
  LogNom(nom: string){
    console.log(nom);
  }
}
