import axios from 'axios';
import { BASE_URL } from './constants';
import { store }    from "store/store";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'pt-BR,pt;q=0.5'
    }
});

const request = function(options) {
    const { user } = store.getState().user;

    const onSuccess = (typeof options.onSuccess !== "undefined") ? options.onSuccess :
        (response) => {
        console.debug(response);
        return response.data;
    }
    const onError = (typeof options.onError !== "undefined") ? options.onError :
        (error) => {
        console.debug(error);
        return false;
    }

    if (typeof user.token !== "undefined" && typeof user.clientKey !== "undefined") {
        if (typeof options.headers === "undefined")
            options.headers = {};

        options.headers["client-key"] = user.clientKey;
        options.headers["x-auth-token"] = user.token;
    }

    return client(options).then(onSuccess).catch(onError);
}

export default request;
