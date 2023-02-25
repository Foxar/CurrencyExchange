import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { CurrencyRateModel } from '../../models/currency-rate.model';
import { CurrencyApiService } from '../../services/currency-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private currencyApi: CurrencyApiService,
  ){

  }
  title = 'kursy';

  themes = [
    {
      code: 'lara-dark-blue',
      name: 'Ciemny',
    },
    {
      code: 'lara-light-blue',
      name: 'Jasny',
    }
  ]

  currentTheme = 'lara-light-blue';

  themeSwitch(){
    this.currentTheme = this.currentTheme == 'lara-dark-blue'?'lara-light-blue':'lara-dark-blue';
    this.themeSet();
  }

  themeSet(){
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = this.currentTheme + '.css';
  }
  }

}
