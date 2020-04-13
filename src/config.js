const API_URL = 'https://api.exchangeratesapi.io/';
const SUPPORTING_CURRENCIES = {
    AUD: "AUD",
    BGN: "BGN",
    BRL: "BRL",
    CAD: "CAD",
    CHF: "CHF",
    CNY: "CNY",
    CZK: "CZK",
    DKK: "DKK",
    EUR: "EUR",
    GBP: "GBP",
    HKD: "HKD",
    HRK: "HRK",
    HUF: "HUF",
    IDR: "IDR",
    ILS: "ILS",
    INR: "INR",
    JPY: "JPY",
    KRW: "KRW",
    MXN: "MXN",
    MYR: "MYR",
    NOK: "NOK",
    NZD: "NZD",
    PHP: "PHP",
    PLN: "PLN",
    RON: "RON",
    RUB: "RUB",
    SEK: "SEK",
    SGD: "SGD",
    THB: "THB",
    TRY: "TRY",
    USD: "USD",
    ZAR: "ZAR"
}
const ALERT_DELAY = 5000;
const CHART_COLOR = '#0baa3b';
const PREDICTION_CHART_COLOR = '#61dafb';
const DEFAULT_NO_OF_WEEKS = 1;

export {
    API_URL,
    SUPPORTING_CURRENCIES,
    ALERT_DELAY,
    CHART_COLOR,
    PREDICTION_CHART_COLOR,
    DEFAULT_NO_OF_WEEKS
}