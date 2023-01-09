import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testme',
  template: `
    <p>
      testme works!
    </p>
  `,
  styles: [
  ]
})
export class TestmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
