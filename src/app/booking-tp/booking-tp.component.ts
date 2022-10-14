import { Component, OnInit } from '@angular/core';
import { Booking } from '../interfaces/Booking';
import { Restaurant } from '../interfaces/Restaurant';
import { BookingService } from '../services/booking.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'booking-tp',
  templateUrl: './booking-tp.component.html',
  styleUrls: ['./booking-tp.component.css']
})
export class BookingTPComponent implements OnInit {

  constructor(private bookingService: BookingService, private restaurantService: RestaurantService) { }

  booking : Booking = {};
  restaurant : Restaurant = {};
  bookings: Booking[] = [];
  restaurants: Restaurant[] = [];
  selectedBooking?: Booking;

  ngOnInit(): void {
    this.getBookings();
    this.getRestaurants();
  }

  getBookings() {
    this.bookings = this.bookingService.getBookings();
  }

  getRestaurants() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  /*onSelect(booking: Booking): void {
    this.selectedBooking = booking;
    if(this.bookingSearch){
      this.bookingSearch.nameRestaurant = booking.name;
    }
}*/

}
