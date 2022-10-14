import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingTPComponent } from './booking-tp/booking-tp.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingListComponent,
    BookingSearchComponent,
    BookingDetailComponent,
    BookingTPComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
