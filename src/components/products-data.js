import {useState, useEffect} from 'react';

export const ProductsData = () =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const link = 'https://my-json-server.typicode.com/hamedor/fakeJsonServer/products';

        const getProducts = async () =>{
            const result = await fetch(link),
                  data = await result.json();

            setProducts(data)
        }

        getProducts();
    },[])

    return products;
}