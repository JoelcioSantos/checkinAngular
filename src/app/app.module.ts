import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { GuestAccommodationControllComponent } from './guest-accommodation-controll/guest-accommodation-controll.component';
import { BackgroundComponent } from './components/background/background.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { GuestControllComponent } from './guest-controll/guest-controll.component';
import { GridComponent } from './components/grid/grid.component';
import { ButtonComponent } from './components/button/button.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ModalGuestComponent } from './components/modal-guest/modal-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GuestAccommodationControllComponent,
    BackgroundComponent,
    GuestControllComponent,
    GridComponent,
    ButtonComponent,
    ModalComponent,
    ModalComponent,
    ModalGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TooltipModule,
    MatDialogModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
]
})
export class AppModule { }
