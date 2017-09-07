import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Pipe({ name: 'subscribe' })
export class SubscribePipe<T> implements PipeTransform, OnDestroy {

  _subscription: Subscription;

  _lastValue: T;

  ngOnDestroy(): void {
    if(this._subscription){
      this._subscription.unsubscribe();
    }
  }
  transform(observable: Observable<T>): T {
    this._subscription = observable.subscribe(
      value => {
        this._lastValue = value;
      },
      error => {
        
      });
    return this._lastValue;
  }
}