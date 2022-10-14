import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/Restaurant';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  static RESTAURANTS: Restaurant[] = [
    { id: 45, name: 'pizzeria' },
    { id: 48, name: 'fromagerie' },
    { id: 99, name: 'La bonne auberge' }
];

private baseUrl = "http://localhost:8080/restaurant/rest/v1";

constructor(private http: HttpClient) { }

getRestaurants(): Restaurant[] {
  return RestaurantService.RESTAURANTS;
}

public post(restaurant:Restaurant):Observable<Restaurant> {
  console.log("toto")
  return this.http.post(this.baseUrl + "/restaurants", restaurant);
  
}
}
