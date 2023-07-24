import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel Management App';
  mainPageMessage: string = 'This is me your parent speaking. Listen to me guys';
  message?:string[];
  heyMessage!: string;
  fromChild?: string;

  @ViewChild(NavbarComponent) sideNavComp!: NavbarComponent;

  ngOnInit(): void {
    setTimeout(() => {
      this.message = this.sideNavComp.navmenus;
    }, 0);
       
  }


  myCount(heyMessage: string): void {
    this.fromChild  = heyMessage;
    console.log(this.fromChild);

  }
}
