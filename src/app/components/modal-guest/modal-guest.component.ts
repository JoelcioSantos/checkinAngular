import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-guest',
  templateUrl: './modal-guest.component.html',
  styleUrls: ['./modal-guest.component.scss']
})
export class ModalGuestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
