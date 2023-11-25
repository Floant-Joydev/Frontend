export function fetchAllBlog () {
    return new Promise( async(resolve,reject) => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/blog/allblog`);
            const data = await response.json();

            resolve( {data} );
        }
        catch(err){
            reject({err})
        }
        
    })
}