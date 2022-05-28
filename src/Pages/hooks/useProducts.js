import { useEffect, useState } from "react";


const useProducts = () => {
    const [parts,setParts] = useState([]);
    useEffect(() =>{
        fetch('  https://warm-sea-73005.herokuapp.com/product',{
            method:'GET',
            headers: {
                authorization: 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[]);

    return [parts]
};

export default useProducts;