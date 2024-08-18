import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '../../assets/guiter.svg';
import logo2 from '../../assets/icons8-guitar-100.svg';
import logo3 from '../../assets/icons8-guitar-500.svg';
import logo4 from '../../assets/icons8-guitar-512.svg';
import Products from './Products';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import useFetch from '@/Hooks/useFetch';
import { BetweenHorizontalEnd } from 'lucide-react';
const Bodyy = () => {
  const {setSearchValue,searchFn,setBy,sortFn,by,totalItems, currentPage,itemPerPage,setActive,isActive}=useFetch()


// const showing = ;
const firstItemIndex = (currentPage - 1) * itemPerPage +1 ; 
const lastItemIndex = firstItemIndex + itemPerPage -1; 


useEffect(()=>{
  sortFn()
},[by])

const sortBy = async(by) =>{
 
setBy(by)



}


    
    return (
        <div className="relative h-screen  flex flex-col ">
            
       <div className=' '>
       <header className="border-b flex justify-between px-5 items-center">
                <img src={logo} alt="logo" className="h-6 inline-block dark:hidden" />
                <img src={logo2} alt="logo" className="h-6 hidden dark:inline-block" />
                <Navbar />
            </header>






            <div className="w-full     px-5  relative flex-col md:flex-row flex justify-between ">
            <form onSubmit={searchFn} className="flex gap-3 items-center max-w-96 mt-5 w-full md:mb-10 justify-center">
                    <Input type="text"  onChange={(e)=>{setSearchValue(e.target.value)}} placeholder="Search" /> 
                    <Button type="submit" className="bg-slate-700 dark:bg-slate-300">Search</Button>
            </form>



            <span className="flex gap-3 w-full  items-end md:max-w-96 mt-5 mb-3 md:mb-10 justify-end">
            <BetweenHorizontalEnd onClick={()=>{
  console.log("click cloase")
 setActive(true)
}} className={`lg:hidden  float-right  mb-2 ${isActive?"hidden":"block"}  z-[9999] `}  />
            <Select className="w-full" onValueChange={sortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Shot by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        
        <SelectItem  value="normal"> 
normal
            </SelectItem>
          <SelectItem  value="price"> 
Price
            </SelectItem>
            <SelectItem  value="rating"> 
Rating
            </SelectItem>
          <SelectItem value="createdAt">
           
Date Added
            
            </SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
            </span>
           








                
 <img src={logo3} alt="logo" className="absolute opacity-15 max-w-96 hidden dark:inline-block right-0 left-0 mx-auto mt-[10%]" />
                <img src={logo4} alt="logo" className="absolute opacity-15 max-w-96 dark:hidden inline-block right-0 left-0 mx-auto mt-[10%]" /> 
          
            </div>
            {
                  totalItems  > 0 &&  <span className='  md:float-right inline  !py-4 px-5 '>Total items: {totalItems}  ({firstItemIndex}-{lastItemIndex})</span> 
                } 

       </div>

       

      
    




       <div className="w-full h-full  overflow-scroll   px-5  relative ">
               
               <Products  />

           </div>

     
            
        
        </div>
    );
};

export default Bodyy;
