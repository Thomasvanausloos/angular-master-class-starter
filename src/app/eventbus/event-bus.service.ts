import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';
import {EventbusArgs} from './eventbus-args';
import {Observable} from 'rxjs/internal/Observable';
import {filter} from 'rxjs/operators';

@Injectable()
export class EventBusService {

  messages: Subject<EventbusArgs> = new Subject<EventbusArgs>();

  public emit(eventType: string, data: any) {
    this.messages.next({type: eventType, data: data});
  }

  public observe(eventType: string): Observable<any> {
    return this.messages.pipe(
      filter(message => message.type === eventType)
    );
  }
}
