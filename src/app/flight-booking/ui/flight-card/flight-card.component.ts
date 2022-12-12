import { Flight } from './../../../entities/flight';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() item: Flight | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log('FlightCard INIT');
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
