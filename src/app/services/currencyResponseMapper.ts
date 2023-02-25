import { CurrencyRateModel } from "../models/currency-rate.model";
import { CurrencyResponseModel, CurrencyResponseRateModel } from "../models/currency-response.model"

export function currencyResponseMapper(response: CurrencyResponseModel[]): CurrencyRateModel[] {
    return response[0].rates.map((rate: CurrencyResponseRateModel) => {
      return {
        symbol: rate.code,
        currency: rate.currency,
        rate: rate.mid
      }
    })
  }