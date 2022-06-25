import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private messageSource = new BehaviorSubject({ type:'',data:[]});
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: any) {
    console.log(message)
    this.messageSource.next(message)
  }
  private dataSource = new BehaviorSubject('');
  destinationMessage = this.dataSource.asObservable();
  sourcemessage(message: any) {
    console.log(message)
    this.dataSource.next(message)
  }
 
}
