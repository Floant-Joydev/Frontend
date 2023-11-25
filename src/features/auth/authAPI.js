// export const loginuser = (userData) => {
//     return new Promise( async (resolve, reject) => {

//         console.log( userData );
//         const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/logincustomer`, {
//             method: 'POST',
//             headers: {
//                 "Content-type" : "appication/json",
//             },
//             body: JSON.stringify(userData)
//         })
//         const data = await response.json();
//         if( response.ok ){
//             resolve({ data });
//         }
//         else{
//             reject({data});
//         }
//     })
// }



export function loginuser ( userData ) {
    return new Promise( async( resolve, reject) => {


        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/logincustomer`, {
            method: "POST",
            headers: {
                'Content-type' : "application/json",
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        if(response.ok){
            resolve({data});
        }
        else{
            reject({data});
        }

    })
}
export function registeruser ( userData ) {
    return new Promise( async( resolve, reject) => {


        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/createcustomer`, {
            method: "POST",
            headers: {
                'Content-type' : "application/json",
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        if(response.ok){
            resolve({data});
        }
        else{
            reject({data});
        }

    })
}
export function checkUser ( token ) {
    return new Promise( async( resolve, reject) => {

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/customerdata`, {
            method: "GET",
            headers: {
                'Content-type' : "application/json",
                'Authorization' : `Bearer ${token}`
            },
        })
        const data = await response.json();
        if(response.ok){
            resolve({data});
        }
        else{
            reject({data});
        }

    })
}

export function addAddress(addressData){
    return new Promise( async (resolve, reject) => {

        const floant_token = localStorage.getItem('floant-auth-token');

        // console.log(addressData)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/createcustomer`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${floant_token}`
            },
            body: JSON.stringify(addressData)
        })
        const data = await response.json();
        if( response.ok ){
            resolve({data});
        }
        else{
            reject({data});
        }
    })
}

