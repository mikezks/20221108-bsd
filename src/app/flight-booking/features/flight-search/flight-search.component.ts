import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
