import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BASE_URL } from '../app.tokens';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient, baseUrl: string) => {
    if (environment.useFlightService === 'default') {
      return new DefaultFlightService(http, baseUrl);
    } else {
      return new DummyFlightService();
    }
  },
  deps: [
    HttpClient,
    [Inject, BASE_URL]
  ]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
