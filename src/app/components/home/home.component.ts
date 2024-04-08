import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.openModalBooking()
  }

  openModalBooking() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
    this.modalService.show(BookingComponent,{ class: 'gray modal-lg' });
  }
}
