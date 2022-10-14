import { Component, OnInit } from '@angular/core';
import { BookingSearch } from '../interfaces/BookingSearch';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookingSearch: BookingSearch = {
    nameRestaurant : 'Pizzeria'
}

}
