import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>`,
  styles: [`
    .alert-warning {
    box-shadow: 2px 2px 1px #ec971f;
  }`]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
