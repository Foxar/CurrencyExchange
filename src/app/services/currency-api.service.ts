import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CurrencyRateModel } from '../models/currency-rate.model';
import { CurrencyResponseModel } from '../models/currency-response.model';
import { currencyResponseMapper } from './currencyResponseMapper';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  apiUrl = 'https://api.nbp.pl/api/'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getCurrentRates(): Observable<CurrencyRateModel[]> {
    this.messageService.clear();
    return this.http.get<CurrencyResponseModel[]>(`${this.apiUrl}exchangerates/tables/A/?format=json`).pipe(
      map(currencyResponseMapper),
      catchError((err) => {
        this.onErrors(err);
        return of([])
      })
    );
  }

  getRatesAtDate(date: Date): Observable<CurrencyRateModel[]> {
    this.messageService.clear();
    const dateString = date.toISOString().split('T')[0];
    return this.http.get<CurrencyResponseModel[]>(`${this.apiUrl}exchangerates/tables/A/${dateString}/?format=json`).pipe(
      map(currencyResponseMapper),
      catchError((err) => {
        this.onErrors(err);
        return of([])
      })
    );
  }

  onErrors(err: HttpErrorResponse){
    if(err.status == 404){
      this.onNoRatesError();
    }else{
      this.onUnknownError();
    }
  }

  onNoRatesError(){
    this.messageService.addAll([{severity: 'error', summary: 'Błąd', detail: 'Brak notowań z tego dnia.'}])
  }

  onUnknownError(){
    this.messageService.addAll([{severity: 'error', summary: 'Błąd', detail: 'Wystąpił nieznany błąd. Proszę spróbuj ponownie później.'}])
  }

  
}
