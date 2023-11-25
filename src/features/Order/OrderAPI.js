export function fetchOrder(  ){
    return new Promise( async(resolve) => {
        const token = localStorage.getItem('floant-auth-token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/vieworder`, {
            method: "GET",
            headers: {
                'Content-type' : "application/json",
                'Authorization' : `Bearer ${token}`
            }
        })
        const data = await response.json();

        resolve({data});
    })
}
export function fetchSubscription(  ){
    return new Promise( async(resolve) => {
        const token = localStorage.getItem('floant-auth-token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/usersubscription`, {
            method: "GET",
            headers: {
                'Content-type' : "application/json",
                'Authorization' : `Bearer ${token}`
            }
        })
        const data = await response.json();

        resolve({data});
    })
}

export function createOrder ( orderData ) {
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem('floant-auth-token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/createorder`, {
            method: "POST",
            headers: {
                'Content-type' : "application/json",
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(orderData)
        })
        const data = await response.json();

        if( response.ok ){
            resolve({data})
        }
        else{
            reject({data});
        }

    })
}
export function createSubscription ( subscriptionData ) {
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem('floant-auth-token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/createsubscription`, {
            method: "POST",
            headers: {
                'Content-type' : "application/json",
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(subscriptionData)
        })
        const data = await response.json();

        if( response.ok ){
            resolve({data})
        }
        else{
            reject({data});
        }

    })
}