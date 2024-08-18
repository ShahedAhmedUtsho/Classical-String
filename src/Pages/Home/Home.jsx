import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { Pagination } from "../../components/ui/pagination";
import { Search, Filter, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Aside from "./Aside";

import Bodyy from "./Body";
import useFetch from "@/Hooks/useFetch";

function Home() {





const {isActive,setActive} = useFetch()




    return (
        <div className="lg:h-screen min-h-screen  lg:grid grid-cols-12   ">

        <aside className={` border-r z-10 bg-white dark:bg-slate-950 lg:flex ${isActive?"flex":"hidden"}    fixed  lg:static  w-full h-screen col-span-2  flex-col  `}>
            <Aside/>
            <Check onClick={()=>{
                setActive(false)
            }} className=" absolute bottom-5 lg:hidden bg-green-700 w-8 h-8 rounded-full text-white p-2 right-5" />
        </aside>
       <main className="  w-full h-screen  col-span-10 flex flex-col   ">
            <Bodyy  />
       </main>
       
        </div>
    )
}

export default Home;
