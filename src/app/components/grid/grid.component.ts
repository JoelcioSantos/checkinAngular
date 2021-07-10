import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalGuestComponent } from '../modal-guest/modal-guest.component';
import { ModalComponent } from '../modal/modal.component';

export interface Car {
  vin: any; 
  year: any;
  brand: any;
  color: any;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss', '../button/button.component.scss']
})
export class GridComponent implements OnInit {

  cars: Car[] = [];
  cols: any[] = [];

  showModalAdd() {
    this.openDialog()
  }

  showModalEdit() {
    this.openDialog()
  }

  openDialog(): void {
    const isGuestControll = document.URL.indexOf("guest-controll") > 0;
    debugger;

    if (isGuestControll) {
      this.openGuestModal();
    } else {
      this.openGuestAccommodationModal();
    }
  }

  openGuestModal() {
    const dialogRef = this.dialog.open(ModalGuestComponent, {
      width: '600px',
      height: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
    });
  }

  openGuestAccommodationModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '400px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

}


