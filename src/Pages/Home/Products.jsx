import React, { useEffect, useState } from 'react';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import useFetch from '@/Hooks/useFetch';
import { PuffLoader } from 'react-spinners';
import { Star } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';  // Import Fade from react-awesome-reveal
import defaultImg from '../../assets/VC203.webp';

const Products = ({by}) => {
    const [guitars,setGuitars] = useState([])
    const { products, isLoading, isError, refetch } = useFetch();




    
    useEffect(()=>{
        if(products){
     const sort = [...products] ;
     
         if(by==="price"){
             sort.sort((a,b)=>  a.price - b.price ) 
            
             
             
                 }else if(by==="date"){
                     sort.sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt)) 
                       
             
                 } 
                     setGuitars(sort)
             
                 
        }
     
     },[by,products])

    
useEffect(()=>{
   if(products){
const sort = products ;

    if(by==="price"){
        sort.sort((a,b)=>  a.price - b.price ) 
       
        
        
            }else if(by==="date"){
                sort.sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt)) 
                  
        
            } 
                setGuitars(sort)
        
            
   }

},[by,products])






    if (isLoading) return <div className="py-5 min-h-screen flex justify-center mt-[20%]"> <PuffLoader /></div> ;
    if (isError) return <span>Something went wrong</span>;

    if (products) {
        return (
            <div className="py-5 min-h-screen">
                <div className='grid grid-cols-3 gap-5 w-full h-full'>
                    {guitars?.map((item, index) => (
                        <Fade key={item.imageUrl + index} triggerOnce>  {/* Add Fade animation */}
                            <Card className=" ">
                                <CardHeader>
                                    <img
                                        loading='lazy'
                                        className='object-cover w-full h-[350px] bg-slate-800/20 border rounded-xl mb-4'
                                        src={item.imageUrl}
                                        alt={item.name}
                                    />
                                    <CardTitle>{item?.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item?.description}</CardDescription>
                                    <CardDescription>
                                        Brand: <strong>{item?.brand}</strong>
                                    </CardDescription>
                                    <CardDescription>
                                        <strong>{item?.stringType === "Nylon" ? "Classical Guitar" : "Acoustic Guitar"}</strong>
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <span className='text-xl'>
                                        ${parseInt(item.price)}
                                    </span>
                                    <span className='flex gap-1 items-center text-base'>
                                        <Star size={18} /> {item?.rating}
                                    </span>
                                </CardFooter>
                            </Card>
                        </Fade>
                    ))}
                </div>
            </div>
        );
    }
};

export default Products;
