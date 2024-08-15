import React from 'react';
import Navbar from './Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '../../assets/guiter.svg';
import logo2 from '../../assets/icons8-guitar-100.svg';
import logo3 from '../../assets/icons8-guitar-500.svg';
import logo4 from '../../assets/icons8-guitar-512.svg';
import Products from './Products';

const Body = () => {
    return (
        <div className="relative h-screen  flex flex-col ">
            
       <div className=' '>
       <header className="border-b flex justify-between px-5 items-center">
                <img src={logo} alt="logo" className="h-6 inline-block dark:hidden" />
                <img src={logo2} alt="logo" className="h-6 hidden dark:inline-block" />
                <Navbar />
            </header>
            <div className="w-full   px-5  relative  ">
            <span className="flex gap-3 items-center max-w-96 mt-5 mb-10 justify-center">
                    <Input type="text" placeholder="Search" /> 
                    <Button className="bg-slate-700 dark:bg-slate-300">Search</Button>
            </span>
 {/* Uncomment these lines if you need the logos as background images */}
                
 <img src={logo3} alt="logo" className="absolute opacity-15 max-w-96 hidden dark:inline-block right-0 left-0 mx-auto mt-[10%]" />
                <img src={logo4} alt="logo" className="absolute opacity-15 max-w-96 dark:hidden inline-block right-0 left-0 mx-auto mt-[10%]" /> 
          
            </div>
       </div>






       <div className="w-full h-full  overflow-scroll   px-5  relative ">
               
               <Products />

           </div>

     
            
        
        </div>
    );
};

export default Body;
