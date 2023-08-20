import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin'
// apiURL
// const baseDataProvider = simpleRestProvider(
//     'http://localhost:3000',
//     fetchUtils.fetchJson,
//     'X-Total-Count',
// );


export const dataProvider = {
    getList: (resource:string, params:string) => {
        const token = localStorage.getItem('auth');
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${token}`);

        return fetchUtils.fetchJson(`http://localhost:5000/${resource}`, {
            method: 'GET',
            headers: headers,
        });
    },
}