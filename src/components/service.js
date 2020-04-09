import {
    API_URL
} from './../config';

class converterService {
    exhangeRequest(param) {
        const endpoint =
            `${API_URL}history?start_at=${param.startDate}&end_at=${param.todayDate}&symbols=${param.fromCurrency},${param.toCurrency}`
        return fetch(endpoint)
            .catch(error => console.error("Error: ", error));
    }

    onInitialLoad(param) {
        const endpoint = `${API_URL}latest?symbols=${param.fromCurrency},${param.toCurrency}`;
        return fetch(endpoint)
            .catch(error => console.error("Error: ", error));
    }
}
export default converterService;