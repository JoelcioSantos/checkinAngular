import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  iconValue:any;
  classValue:any;
  routerValue:any;
  tooltipValue:any;
  idValue:any

  constructor(public dialog: MatDialog) { }

  @Input()
  set setIcon(iconValue: string) {
    this.iconValue = iconValue;
  }

  @Input()
  set setClass(classValue: string) {
    this.classValue = classValue
  }

  @Input()
  set setRouter(routerValue: string) {
    this.routerValue = routerValue
  }

  @Input()
  set setTooltip(tooltipValue: string) {
    this.tooltipValue = tooltipValue
  }

  @Input()
  set setId(idValue: string) {
    this.idValue = idValue
  }
  
  @Output() showModalAdd = new EventEmitter();
  @Output() showModalEdit = new EventEmitter();
  @Output() showModal1 = new EventEmitter();

  showModal() {
    if (this.idValue === 'excluir') {

      //exclui

    } else if (this.idValue === 'editar') {

      this.showModalEdit.emit(null);

    } else if (this.idValue === 'add') {

      this.showModalAdd.emit(null);
    } else if (this.idValue === 'close') {

      this.dialog.closeAll();
    }
    
  }

  ngOnInit(): void {}

}
