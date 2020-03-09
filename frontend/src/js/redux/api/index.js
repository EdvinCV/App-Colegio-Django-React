const axios = require('axios');

function getToken() {
    const token = localStorage.getItem('token');
    if (token) {
        return `Token ${token}`;
    }
    return false;
}

const headers = {
    'Authorization': getToken()
}

export const apiGet = (url) => () =>
    axios.get(url, 
        { headers: { Authorization: `Token ${getToken()}` } }).then(
            v => v.json()
        );
    
export const apiPost = (url, obj) => () => 
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 
            'Content-type': 'application/json',
            'Authorization': getToken(), 
        })
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
        return r;
    });

export const apiDelete = (url, id) => () => 
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
        return id;
    });