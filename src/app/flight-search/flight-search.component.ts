import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .get<Flight[]>(url, { params, headers })
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
