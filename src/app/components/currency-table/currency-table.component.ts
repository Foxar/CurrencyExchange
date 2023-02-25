import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { CurrencyRateModel } from '../../models/currency-rate.model';
import { CurrencyApiService } from '../../services/currency-api.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent {
  constructor(
    private currencyApi: CurrencyApiService,
  ){}

  currencyCols = [
    {
      field: 'symbol',
      header: 'Symbol waluty',
      type: 'text',
    },
    {
      field: 'currency',
      header: 'Waluta',
      type: 'text',
    },
    {
      field: 'rate',
      header: 'Kurs waluty',
      type: 'numeric',
    },
  ]

  currencyData: CurrencyRateModel[] = []

  today = new Date();

  currentDate = new Date();

  currencySubscriptions: Subscription[] = [];


  ngOnInit(): void {
    this.getCurrentRates();
  }

  
  ngOnDestroy(): void {
    this.currencySubscriptions.forEach(s =>{
      s.unsubscribe();
    })
  }

  filterEvent(){
    console.log(this.currentDate);
    if(this.currentDate instanceof Date){
      this.getDateRates();
    }
  }

  clear(currencyTable: Table){
    
    if(!this.currentDate || this.currentDate.toISOString().split('T')[0] != this.today.toISOString().split('T')[0]){
      this.currentDate = new Date();
      this.getCurrentRates();
    }
    currencyTable.clear();
  }

  getCurrentRates(){
    this.currencySubscriptions.push(
      this.currencyApi.getCurrentRates().subscribe(
        rates => {
          this.currencyData = rates;
    }));
  }

  getDateRates(){
    this.currencySubscriptions.push(
      this.currencyApi.getRatesAtDate(this.currentDate).subscribe(
        rates => {
          this.currencyData = rates;
    }));
  }
}
