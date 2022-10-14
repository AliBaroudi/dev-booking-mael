import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../interfaces/Booking';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  booking : Booking = {};
  
  constructor(private bookingService : BookingService) { }

    ngOnInit(): void {
  }
  save(): void {
    this.bookingService.post(this.booking).subscribe(
      booking => this.booking = booking
    );
}
}
