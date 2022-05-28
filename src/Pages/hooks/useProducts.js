import { useEffect, useState } from "react";


const useProducts = () => {
    const [parts,setParts] = useState([]);
    useEffect(() =>{
        fetch(' http://localhost:5000/product',{
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