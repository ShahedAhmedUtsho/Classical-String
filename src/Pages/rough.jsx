import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import { Fade } from 'react-awesome-reveal';
import { Star } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import useFetch from '@/Hooks/useFetch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

const Products = () => {
    const [guitars, setGuitars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { products, isLoading, isError, refetch, sortFn, setPage, totalItems } = useFetch();
    const itemsPerPage = 10;

    useEffect(() => {
        if (products) {
            setGuitars(products);
        }
    }, [products]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setPage(page);
        sortFn();
    };

    if (isLoading) return <div className="py-5 min-h-screen flex justify-center mt-[20%]"> <PuffLoader /></div>;
    if (isError) return <span>Something went wrong</span>;

    return (
        <div className="py-5 min-h-screen">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full'>
                {guitars && guitars.length > 0 ? (
                    guitars.map((guitar, index) => (
                        <Fade key={guitar?._id || index} triggerOnce>
                            <Card className="">
                                <CardHeader>
                                    <img
                                        loading='lazy'
                                        className='object-cover w-full h-[350px] bg-slate-800/20 border rounded-xl mb-4'
                                        src={guitar?.imageUrl || defaultImg}
                                        alt={guitar?.name || "Guitar"}
                                    />
                                    <CardTitle>{guitar?.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{guitar?.description}</CardDescription>
                                    <CardDescription>
                                        Brand: <strong>{guitar?.brand}</strong>
                                    </CardDescription>
                                    <CardDescription>
                                        <strong>{guitar?.stringType === "Nylon" ? "Classical Guitar" : "Acoustic Guitar"}</strong>
                                    </CardDescription>
                                    <CardDescription>
                                        <strong>{guitar?.createdAt && new Date(guitar.createdAt).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}</strong>
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <span className='text-xl'>
                                        ${parseInt(guitar?.price) || "N/A"}
                                    </span>
                                    <span className='flex gap-1 items-center text-base'>
                                        <Star size={18} /> {guitar?.rating || "N/A"}
                                    </span>
                                </CardFooter>
                            </Card>
                        </Fade>
                    ))
                ) : (
                    <p>No guitars found.</p>
                )}
            </div>

            <div className='fixed right-10 flex items-center !justify-start bg-slate-900/0 bottom-4 h-10'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    </PaginationItem>
                    {totalItems > 0 && itemsPerPage > 0 && Array.isArray([...Array(Math.ceil(totalItems / itemsPerPage)).keys()]) ? (
                        [...Array(Math.ceil(totalItems / itemsPerPage)).keys()].map(page => (
                            <PaginationItem key={page}>
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
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(totalItems / itemsPerPage)} />
                    </PaginationItem>
                </PaginationContent>
            </div>
        </div>
    );
};

export default Products;










// app.get('/products', async (req, res) => {
//       const brand = req?.query?.brand;
//       const sort = req?.query?.sort;
//       const range = req?.query?.range;
//       const category = req?.query?.category;
//       const search = req?.query?.search;
//       const page = parseInt(req?.query?.page) || 1; // Default to page 1
//       const limit = parseInt(req?.query?.limit) || 10; // Default to 10 items per page

//       let order = "";
//       if (sort === "rating") {
//         order = req?.query?.order === 'desc' ? 1 : -1;
//       } else {
//         order = req?.query?.order === 'desc' ? -1 : 1;
//       }

//       let query = {};
//       if (brand && brand !== "all") {
//         query.brand = brand;
//       }
//       if (category && category !== "all") {
//         if (category === "classical") {
//           query.stringType = "Nylon";
//         } else {
//           query.stringType = "Steel";
//         }
//       }
//       if (range && range !== "all") {
//         const [min, max] = range.split('-');
//         query.price = {
//           $gte: parseInt(min) || 0,
//           ...(max ? { $lte: parseInt(max) } : {}),
//         };
//       }
//       if (search) {
//         query.name = { $regex: search, $options: 'i' };
//       }

//       try {
//         const totalItems = await products.countDocuments(query); // Count total items matching the query
//         const result = await products
//           .find(query)
//           .sort({ [sort]: order })
//           .skip((page - 1) * limit) // Skip the previous pages
//           .limit(limit) // Limit to the current page
//           .toArray();

//         res.send({ totalItems, products: result });
//       } catch (error) {
//         res.status(500).send(error);
//       }
//     });












// import useAuth from '@/Hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React, { createContext,  useEffect, useState } from 'react';





// export const FetchContext = createContext()
// const FetchProvider = ({children}) => {
//     const { backUrl } = useAuth();
//     const [url, setUrl] = useState(`${backUrl}/products`);
//     const [searchValue, setSearchValue] = useState("");
//     const [by, setBy] = useState("normal");
//     const [category, setCategory] = useState("");
//     const [range, setRange] = useState("");
//     const [brand, setBrand] = useState("");
//     const [page, setPage] = useState(1); // Add page state
//     const [limit, setLimit] = useState(10); // Add limit state
  
//     const { data , refetch, isLoading, isError } = useQuery({
//       queryKey: ['products', url],
//       queryFn: async () => {
//         try {
//           const res = await axios.get(url);
         
//           return res?.data || [];
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     });

//     console.log(data)
//     const sortFn = () => {
//         const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&page=${page}&limit=${limit}`;
//         setUrl(searchUrl);
//         refetch();
//       };
    
//       const searchFn = (e) => {
//         e.preventDefault();
//         const searchUrl = `${backUrl}/products?category=${category}&range=${range}&brand=${brand}&search=${searchValue}&sort=${by}&page=${page}&limit=${limit}`;
//         setUrl(searchUrl);
//         refetch();
//       };





//     const share = {sortFn,products :data?.products,totalItems : data?.totalItems,by,setBy,searchFn,refetch,isLoading,isError,brand,category,range,setBrand,setCategory,setRange , searchValue,setSearchValue,setPage,page,limit,setLimit,}
//     return (
//         <FetchContext.Provider value={share}>
//             {children}
//         </FetchContext.Provider>
//     );
// };

// export default FetchProvider;




