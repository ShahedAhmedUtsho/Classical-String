import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useAuth from '@/Hooks/useAuth';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
const Aside = () => {
    const { user, logOut, Alert } = useAuth();
    const {brand,category,range,setBrand,setCategory,setRange} = useFetch()
    const navigate = useNavigate();




const handleCategory = (a)=>{
 a==="all"? setCategory("") : setCategory(a) ; 
console.log(a)
}


const handleBrand = (a)=>{
  a==="all"? setBrand("") : setBrand(a) ; 
  console.log(a)
 }

const handlePrice = (a)=>{
  a==="all"? setRange("") : setRange(a) ; 
  console.log(a)
 }




    return (
        <aside className="flex flex-col h-full">
            <Card className="border-none rounded-none mb-4">
                <CardHeader>
                    <CardTitle>Classical strings</CardTitle>
                    <CardDescription>
                        Discover premium classical guitars with specifications, prices, and top picks.
                    </CardDescription>
                </CardHeader>
                
                <CardContent>
               
                    <Select onValueChange={handleCategory} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Brand" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="all">All</SelectItem>
          <SelectItem value="Yamaha">Yamaha</SelectItem>
          <SelectItem value="Gibson">Gibson</SelectItem>
          <SelectItem value="Fender">Fender</SelectItem>
          <SelectItem value="Manuel Rodriguez">Manuel Rodriguez</SelectItem>
          <SelectItem value="Cordoba">Cordoba</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
</CardContent><CardContent className="">
    <Select onValueChange={handleBrand}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Guitar type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="all">All</SelectItem>
          <SelectItem value="classical guitar">classical guitar</SelectItem>
          <SelectItem value="acoustic guitar">acoustic guitar</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
                </CardContent>
                <CardContent className="">
    <Select onValueChange={handlePrice}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Price range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="all">All</SelectItem>
          <SelectItem value="500">$0 to $500</SelectItem>
          <SelectItem value="1000">$500 to $1000</SelectItem>
          <SelectItem value="1000+"> $1000 +</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
                </CardContent>
            </Card>

            <Card className="mt-auto border-none rounded-none">
                <CardHeader className=" gap-4">
                    <Avatar className="border flex justify-center items-center">
                        <AvatarImage src={user?.photoURL} alt={user?.displayName} />
                        <AvatarFallback className="flex justify-center items-center text-center">
                            <User />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle>{user?.displayName}</CardTitle>
                        <CardDescription>Premium classical guitar enthusiast</CardDescription>
                    </div>
                </CardHeader>

                <CardFooter className="pt-4">
                    {user ? (
                        <button
                            className="text-red-500  font-thin"
                            variant="warning"
                            onClick={() => {
                                logOut();
                                navigate('/auth')
                                Alert("default", "Done", "Logout successful");
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                        variant="ghost"
                            onClick={() => {
                                navigate("/auth");
                            }}
                        >
                            Login
                        </button>
                    )}
                </CardFooter>
            </Card>
        </aside>
    );
};

export default Aside;
