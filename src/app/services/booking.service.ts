import { Injectable } from '@angular/core';
import { Booking } from '../interfaces/Booking';
import { Observable, of } from 'rxjs'; 
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  static BOOKINGS: Booking[] = [
    { id: 45, name: 'pizzeria' },
    { id: 48, name: 'fromagerie' },
    { id: 51, name: 'kebab' },
    { id: 59, name: 'patisserie' },
    { id: 66, name: 'boucher' },
    { id: 99, name: 'La bonne auberge' }
];

private baseUrl = "http://localhost:8080/booking/rest/v1";

constructor(private http: HttpClient) { }

getBookings(): Booking[] {
  return BookingService.BOOKINGS;
}

public post(booking:Booking):Observable<Booking> {
  console.log("toto")
  return this.http.post(this.baseUrl + "/bookings", booking);
  
}
}
