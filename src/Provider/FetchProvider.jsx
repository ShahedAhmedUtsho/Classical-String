import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext,  useEffect, useState } from 'react';





export const FetchContext = createContext()
const FetchProvider = ({children}) => {

const [url,setUrl] = useState('data.json')



const {data:products , refetch , isLoading ,isError}=  useQuery(
    {
        queryKey:['products'],
        queryFn : async()=>{
           try {
            const res = await  axios.get(url,{withCredentials:true})

           return res?.data ? res?.data : []
            
           } catch (error) {
            console.log(error)
           }

 

        

        }
    }
)









    const share = {products,refetch,isLoading,isError}
    return (
        <FetchContext.Provider value={share}>
            {children}
        </FetchContext.Provider>
    );
};

export default FetchProvider;


