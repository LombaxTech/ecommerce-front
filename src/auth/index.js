import { API } from '../config';

export const signup = (user) => {
    // console.log(name, email, password);
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.error(err))
}