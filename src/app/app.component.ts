import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel Management App';
  mainPageMessage: string = 'This is me your parent speaking. Listen to me guys';
}
