import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm = this.fb.nonNullable.group({
    id: [999],
    from: ['Graz', [
      Validators.required,
      Validators.minLength(3)
    ]],
    to: ['Hamburg', [
      Validators.required,
      Validators.minLength(3)
    ]],
    date: [new Date().toISOString()]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save(): void {

  }
}
