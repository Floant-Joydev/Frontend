import { useSelector } from "react-redux";
import { selectCart } from "./CartSlice";

export function fetchAllCart (token) {
    return new Promise( async(resolve,reject) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/viewcart`, {
                method: "GET",
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            });
            const data = await response.json();

            resolve( {data} );
        }
        catch(err){
            reject({err})
        }
        
    })
}
export function createCart (productData ) {
    return new Promise( async(resolve,reject) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/cart`, {
                method: "POST",
                headers: {
                    'Content-type' : "application/json",
                    'Authorization' : `Bearer ${productData.token}`
                },
                body: JSON.stringify({
                    productId: productData.productId,
                    quantity: productData.quantity
                })
            });
            const data = await response.json();

            resolve( {data} );
        }
        catch(err){
            reject({err})
        }
        
    })
}
export function deleteCart ( productData ) {
    return new Promise( async(resolve,reject) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/deletecart`, {
                method: "DELETE",
                headers: {
                    'Content-type' : "application/json",
                    'Authorization' : `Bearer ${productData.token}`
                },
                body: JSON.stringify({
                    productId: productData.productId,
                })
            });
            const data = await response.json();

            resolve( {data} );
            // console.log(data);
        }
        catch(err){
            reject({err})
            console.log(err);
        }
        
    })
}
export function deleteAllItem () {
    return new Promise( async(resolve) => {
        const floant_token = localStorage.getItem('floant-auth-token')
        const cart = await fetchAllCart(floant_token);
        const carts = cart.data.products;

        // console.log(carts)
        
        // console.log('done');
        
        for( let item of carts ){
            // console.log('call')
            await deleteCart({productId: item.product._id, token: floant_token})
        }

        resolve({success: "done"});
        
    })
}