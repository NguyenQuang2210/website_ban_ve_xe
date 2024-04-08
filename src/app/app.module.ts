import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MyfooterComponent } from './components/myfooter/myfooter.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ListComponent } from './components/list/list.component';
import { BookingComponent } from './components/booking/booking.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    NavigationComponent,
    MyfooterComponent,
    LayoutComponent,
    RatingComponent,
    AboutusComponent,
    ListComponent,
    BookingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
