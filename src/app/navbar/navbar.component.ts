import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent {
  message: string = 'Its me man';
  navmenus: string[] = ['home', 'about', 'contact'];
  sideNavMsg: string = 'This is your message my child dear side nav bar';
  childMessage:string = "I am a child of the main App component.......";
  count:number = 0;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    
    this.count++;
    this.newItemEvent.emit(this.childMessage);
    //console.log(`You have clicked me ${this.count} time(s)`);

  }
}
