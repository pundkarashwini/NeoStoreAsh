import * as url from '../lib/api';
import { AsyncStorage } from 'react-native';




export const apicall = ((url, method, bodydata, headers, callback) => {
    let headerobj = headers == null ? {} : headers;
    AsyncStorage.getItem('access_token').then((value) => {
        let options =
        {
            method: method,
        };
        value != null ? headerobj['access_token'] = value : null;
        value != null ? options['headers'] = headerobj : null;
        bodydata != null ? options['body'] = bodydata : null;
        fetch(url, options,
            {
                options
            })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                callback(response);
            })
            .catch((error) => {
                callback(error);
            });
    });

});








