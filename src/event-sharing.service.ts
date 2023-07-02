import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventSharingService {
// Observable string sources
  private counter = 0;
  private unitIdSource = new Subject<number>();
  // Observable string streams
  unitId = this.unitIdSource.asObservable();
  constructor() {

  }

  decreaseUnitId(){
    this.counter++;
    this.unitIdSource.next(this.counter);
  }
}
