import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../interfaces/Booking';
import { BOOKINGS } from '../interfaces/BookingArray'
import { BookingSearch } from '../interfaces/BookingSearch';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService: BookingService) { } 

  //bookings = BOOKINGS;
  bookings: Booking[] = []; 
  selectedBooking?: Booking;

  onSelect(booking: Booking): void {
      this.selectedBooking = booking;
      if(this.bookingSearch){
        this.bookingSearch.nameRestaurant = booking.name;
      }
  }

  @Input() bookingSearch?: BookingSearch;

  ngOnInit(): void {
    this.getBookings();
    //this.getBookingUsers();
  }
  
  getBookings(): void {
    this.bookings = this.bookingService.getBookings();
}

/*getBookingUsers(): void {
  this.bookingService.getBookingUsers().subscribe(
      bookingUsers => this.bookings = bookingUsers);
}*/

}
