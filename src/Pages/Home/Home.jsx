import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { Pagination } from "../../components/ui/pagination";
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import axios from "axios";
import Aside from "./Aside";

import Bodyy from "./Body";

function Home() {


    return (
        <div className="lg:h-screen min-h-screen  lg:grid grid-cols-12   ">

        <aside className=" border-r lg:flex hidden w-full h-screen col-span-2  flex-col  ">
            <Aside/>
        </aside>
       <main className="  w-full h-screen  col-span-10 flex flex-col   ">
            <Bodyy/>
       </main>
       
        </div>
    )
}

export default Home;
