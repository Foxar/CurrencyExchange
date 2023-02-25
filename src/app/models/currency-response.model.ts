export interface CurrencyResponseModel {
    effectiveDate: string,
    no: string,
    rates: CurrencyResponseRateModel[],
    table: string
}

export interface CurrencyResponseRateModel {
    code: string,
    currency: string,
    mid: number
}