export function fetchAllProduct () {
    return new Promise( async(resolve,reject) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/products/allproduct`);
            const data = await response.json();

            resolve( {data} );
        }
        catch(err){
            reject({err})
        }
        
    })
}