import * as c       from "helpers/constants";
import request      from "helpers/request";

export function logout() {
    return (dispatch) => {
        dispatch({ type: c.LOGOUT })
        setTimeout(() => {
            window.location.href = "/login";
        }, 500);
    }
}

export function login({ login, password }, callback) {
    return (dispatch) => {
        request({
            url: "/login",
            method: "POST",
            data: {
                login,
                password
            },
        }).then(response => {
            if (response.status) {
                dispatch({ type: c.SET_USER, user: response.user });
                callback(true);
            } else {
                callback(false, response.message);
            }
        }).catch(response => {
            callback(false, "Não foi possível validar suas credenciais no momento. Tente novamente");
        });
    }
}
