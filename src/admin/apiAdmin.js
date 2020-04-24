import { API } from '../config';

export const createCategory = (userId, token, categoryName) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        //! body: JSON.stringify(categoryName)
        body: JSON.stringify({
            name: `${categoryName}`
        })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const testCreateCategory = () => {
    // console.log('hit')
    return fetch('http://localhost:8000/api/category/create/5e80c7b55100ee7768d39567', {
        method: "POST",
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTgwYzdiNTUxMDBlZTc3NjhkMzk1NjciLCJpYXQiOjE1ODc0OTkzNDV9.MxcXoTjDPxDmabUEv9-CVaVmehWGs-3CDQZquIbEEoo"
        },
        body: JSON.stringify({ name: 'hats' })
    })
        .then(res => res.json())
        .catch(err => console.log(err))

}

export const getCategories = () => {
    return fetch(`${API}/categories`)
        .then(res => res.json())
        .catch(err => console.log(err))
}













// export const testCreateCategory = () => {
//     // console.log('hit')
//     return fetch('http://localhost:8000')
// }