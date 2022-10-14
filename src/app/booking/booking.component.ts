import { Component, OnInit } from '@angular/core';
import { Booking } from '../interfaces/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  property : string = "Hello World";
  age : number = 6;

  constructor() { }

  ngOnInit(): void {
  }

  booking: Booking = {
    id: 1,
    name: 'My first booking'
}

  

}
