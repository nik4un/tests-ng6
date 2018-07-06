import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  num = 0;
  logs = [];

  onClick() {
    this.displayText = !this.displayText;
    this.num += 1;
    this.logs.push(this.num);
  }

}
