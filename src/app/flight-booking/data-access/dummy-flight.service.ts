import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  constructor() { }

  find(): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Los Angeles',
        to: 'Rio',
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  }
}
