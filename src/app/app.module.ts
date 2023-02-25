import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';

const primeNgModules = [
  TableModule,
  InputTextModule,
  ButtonModule,
  CalendarModule,
  MessageModule,
  MessagesModule,
  SelectButtonModule,
]

const angularModules = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
]

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent,
  ],
  imports: [
    ...primeNgModules,
    ...angularModules,
  ],
  providers: [ 
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
