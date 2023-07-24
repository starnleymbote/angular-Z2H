import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent{

    clientName:string = "Stanley";
    roomNumber = 10;

    @Input() mainMessage!: string;
}
