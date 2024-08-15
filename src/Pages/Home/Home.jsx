import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { Pagination } from "../../components/ui/pagination";
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Aside from "./Aside";
import Body from "./body";

function Home() {


    return (
        <div className="lg:h-screen min-h-screen  grid grid-cols-12   ">

        <aside className=" border-r w-full h-screen col-span-2 flex flex-col  ">
            <Aside/>
        </aside>
       <main className="  w-full h-screen  col-span-10 flex flex-col   ">
            <Body/>
       </main>
       
        </div>
    )
}

export default Home;
