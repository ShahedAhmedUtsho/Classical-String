import useAuth from '@/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext,  useEffect, useState } from 'react';





export const FetchContext = createContext()
const FetchProvider = ({children}) => {
const {backUrl} = useAuth()
const [url,setUrl] = useState(`${backUrl}/products`)



const {data:products , refetch , isLoading ,isError}=  useQuery(
    {
        queryKey:['products'],
        queryFn : async()=>{
           try {
            const res = await  axios.get(url)

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


