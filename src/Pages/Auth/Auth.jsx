import React, { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import { AuthContext } from '@/Provider/AuthProvider';
import Register from './register';
import Login from './Login';
import { Facebook } from 'lucide-react';
import  googleLogo from '../../assets/icons8-google (1).svg'
const Auth = () => {
const {user,setUser,loading,error,isLoading,message,success,logOut,googleLogin,register,passwordLogin,Alert,setLoading} = useAuth()
    const navigate =useNavigate()
    const [searchParams]= useSearchParams()


const google = async()=>{

  try {
    setLoading(true) ;
  const res = await  googleLogin() ; 
  const user = res.user ; 
  setUser(user) ; 
  Alert("default",`welcome ${user.displayName}`,"you are authorized successfully" )
  navigate('/')


    
  } catch (error) {
    Alert("destructive",` Error`,error.message )
  }finally{
    setLoading(true)
  }

}



    return (
        <div className=' min-h-screen w-full flex justify-center items-center'>
  
           
            <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger   value="Login">Login</TabsTrigger>
        <TabsTrigger value="Register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
       
    <Login/>
       
      </TabsContent>
  
      <TabsContent value="Register">
       <Register/>
           
      </TabsContent>


      <Card onClick={google} className="flex  justify-center items-center hover:border-slate-400/50 mt-2">
      <CardDescription className="p-3">
      <img className=' opacity-50' src={googleLogo} width={30} alt="google Logo" />

      </CardDescription>
      <CardDescription className="p-3 -ml-4">
      Continue With Google
      
      </CardDescription>
      </Card>
    </Tabs>
      
        </div>
        
    );
};

export default Auth;