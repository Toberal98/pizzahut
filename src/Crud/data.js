import axios from 'axios'
import React, { useEffect, useState } from 'react'


function useGetData(){
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8080/list/user')
        .then(response =>{
            setData(response.data);
        })

    },[data])

    return data
}

export default useGetData