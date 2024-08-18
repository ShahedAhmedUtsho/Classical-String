import React, { useEffect, useState, memo } from 'react';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import useFetch from '@/Hooks/useFetch';
import { PuffLoader } from 'react-spinners';
import { Star } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import defaultImg from '../../assets/VC203.webp';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useTheme } from '@/components/ThemeProvider';

const Products = () => {
const {theme} = useTheme() ;
    const [guitars, setGuitars] = useState([]);
    const { products, isLoading, isError, refetch, sortFn, currentPage, setCurrentPage,totalItems, itemPerPage, setPage,PageFn } = useFetch();

    useEffect(() => {
        if (products) {
            const sort = [...products];
            setGuitars(sort);
        }
    }, [products]);
    useEffect(()=>{
        PageFn() ;
        
    },[currentPage])

    const handlePageChange = (page) => {
       
        setCurrentPage(page);
        setPage(page);
        
    };

    if (isLoading) return <div className="py-5 min-h-screen relative flex justify-center mt-[20%]">
         <PuffLoader  size={70} color={theme === "dark" ? "white" : "black" }  />
         
         
         </div>;
    if (isError) return <span>Something went wrong</span>;

    if (products) {
        return (
            <div className="py-5 min-h-screen pb-20 ">
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full'>
                    {guitars && guitars.map((item, index) => (
                        <Fade key={item?.imageUrl || index} triggerOnce>
                            <Card className=" ">
                                <CardHeader>
                                    <img
                                        loading='lazy'
                                        className='object-cover w-full h-[350px] bg-slate-800/20 border rounded-xl mb-4'
                                        src={item?.imageUrl || defaultImg} // Fallback to default image
                                        alt={item?.name}
                                    />
                                    <CardTitle>{item?.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{

                                        (()=>{
                                          const content =   item?.description ;
                                          const arr = content.split("") ;
                                          
                                          const cut = arr.slice(0,100).join("")
                                          
                                          const result = arr.length > 100 ? ( <>{`${cut} `} <strong>more</strong> </>)  : (<>{`${item?.description} `}  </>) 

return result


                                          
                                        })()
                                        
                                        }</CardDescription>
                                    <CardDescription>
                                        Brand: <strong>{item?.brand}</strong>
                                    </CardDescription>
                                    <CardDescription>
                                        <strong>{item?.stringType === "Nylon" ? "Classical Guitar" : "Acoustic Guitar"}</strong>
                                    </CardDescription>
                                    <CardDescription>
                                        <strong>{
                                            item?.price && (() => {
                                                const date = new Date(item?.createdAt).toLocaleDateString('en-US', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                });
                                                return `${date}`;
                                            })()
                                        }</strong>
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <span className='text-xl'>
                                        ${parseInt(item?.price)}
                                    </span>
                                    <span className='flex gap-1 items-center text-base'>
                                        <Star size={18} /> {item?.rating}
                                    </span>
                                </CardFooter>
                            </Card>
                        </Fade>
                    ))}
                </div>
                <div className='fixed right-10 flex items-center !justify-start bg-slate-900/0 bottom-4 h-10'>
                    <Pagination className=" mx-0 bg-slate-300 dark:bg-slate-700 rounded-md justify-start">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                            </PaginationItem>
                            <PaginationItem className="block md:hidden">
                                        <PaginationLink >
                                            {currentPage}
                                        </PaginationLink>
                                    </PaginationItem>
                            {totalItems > 0 && itemPerPage > 0 && Array.isArray([...Array(Math.ceil(totalItems / itemPerPage)).keys()]) ? (
                                [...Array(Math.ceil(totalItems / itemPerPage)).keys()].map(page => (
                                    <PaginationItem className="hidden md:block" key={page}>
                                        <PaginationLink onClick={() => handlePageChange(page + 1)} isActive={currentPage === page + 1}>
                                            {page + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))
                            ) : (
                                <PaginationItem>
                                    <span>No items found</span>
                                </PaginationItem>
                            )}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => currentPage < Math.ceil(totalItems / itemPerPage) && handlePageChange(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(totalItems / itemPerPage)}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        );
    }
};

export default Products;
