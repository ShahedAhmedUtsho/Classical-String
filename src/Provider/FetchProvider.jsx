import useAuth from '@/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext,  useEffect, useState } from 'react';





export const FetchContext = createContext()
const FetchProvider = ({children}) => {
const {backUrl} = useAuth();
const [searchValue,setSearchValue] = useState("")
const [by,setBy] = useState("normal") ;
const [category,setCategory]=useState("") ;
const [range,setRange]=useState("") ;
const [limit,setLimit] = useState(6) ;
const [page,setPage] = useState(1);
const [brand,setBrand] = useState('') ;
const [currentPage, setCurrentPage] = useState(1); 
const [url,setUrl] = useState(`${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&limit=${limit}&page=${page}`)



const {data, refetch , isLoading ,isError}=  useQuery(
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


const sortFn =()=>{
    
    const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&limit=${limit}&page=${1}`;
    
    setUrl(searchUrl) ; 
    setCurrentPage(1)
    refetch()
}
const searchFn = (e)=>{
    e.preventDefault()
    
    const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&limit=${limit}&page=${1}`;
    
    setUrl(searchUrl) ; 
    setCurrentPage(1) ;
    refetch()
}
const PageFn =()=>{
    
    const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&limit=${limit}&page=${currentPage}`;
    
    setUrl(searchUrl) ; 
    refetch()
}




    const share = {sortFn,products:data?.products,totalItems:data?.totalItems,itemPerPage:limit,setPage,page,by,setBy,searchFn,refetch,isLoading,isError,brand,category,range,setBrand,setCategory,setRange , searchValue,setSearchValue,currentPage, setCurrentPage,PageFn}
    return (
        <FetchContext.Provider value={share}>
            {children}
        </FetchContext.Provider>
    );
};

export default FetchProvider;


