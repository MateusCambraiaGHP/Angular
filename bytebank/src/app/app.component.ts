import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencesValue: any[] = [];

  transfer($event) {
    const transference = {...$event, date: new Date};
    this.transferencesValue.push(transference);
  }
}
