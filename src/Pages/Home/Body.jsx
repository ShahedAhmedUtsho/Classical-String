import React, { useState } from 'react';
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
const Bodyy = () => {
const [by,setBy] = useState("normal")


const sortBy = (by) =>{
  
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
            <div className="w-full    px-5  relative  flex justify-between ">
            <span className="flex gap-3 items-center max-w-96 mt-5 w-full mb-10 justify-center">
                    <Input type="text" placeholder="Search" /> 
                    <Button className="bg-slate-700 dark:bg-slate-300">Search</Button>
            </span>
            <span className="flex gap-3 w-full  items-end max-w-96 mt-5 mb-10 justify-end">
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
          <SelectItem value="date">
           
Date Added
            
            </SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
            </span>
 {/* Uncomment these lines if you need the logos as background images */}
                
 <img src={logo3} alt="logo" className="absolute opacity-15 max-w-96 hidden dark:inline-block right-0 left-0 mx-auto mt-[10%]" />
                <img src={logo4} alt="logo" className="absolute opacity-15 max-w-96 dark:hidden inline-block right-0 left-0 mx-auto mt-[10%]" /> 
          
            </div>
       </div>






       <div className="w-full h-full  overflow-scroll   px-5  relative ">
               
               <Products by={by} />

           </div>

     
            
        
        </div>
    );
};

export default Bodyy;
