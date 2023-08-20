import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin'
// apiURL
const baseDataProvider = simpleRestProvider(
    'http://localhost:3000',
    fetchUtils.fetchJson,
    'X-Total-Count',
);


// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     const { token } = JSON.parse(localStorage.getItem('auth'));
//     options.headers.set('Authorization', `Bearer ${token}`);
//     return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);
