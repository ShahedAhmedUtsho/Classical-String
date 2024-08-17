import useAuth from '@/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext,  useEffect, useState } from 'react';





export const FetchContext = createContext()
const FetchProvider = ({children}) => {
const {backUrl} = useAuth()
const [url,setUrl] = useState(`${backUrl}/products`)
const [searchValue,setSearchValue] = useState("")

const [category,setCategory]=useState("") ;
const [range,setRange]=useState("") ;

const [brand,setBrand] = useState('')


const {data:products , refetch , isLoading ,isError}=  useQuery(
    {
        queryKey:['products',url],
        queryFn : async()=>{
           try {
            const res = await  axios.get(url)
console.log(res.data)
           return res?.data || []
            
           } catch (error) {
            console.log(error)
           }

        }
    }
)



const searchFn = (e)=>{
    // e.preventDefault()
    // console.log(brand,range,category,searchValue)  ;
    // const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}`;
    // console.log(searchUrl)  ;
    // setUrl(searchUrl) ; 
    // refetch()
}





    const share = {products,searchFn,refetch,isLoading,isError,brand,category,range,setBrand,setCategory,setRange , searchValue,setSearchValue}
    return (
        <FetchContext.Provider value={share}>
            {children}
        </FetchContext.Provider>
    );
};

export default FetchProvider;


