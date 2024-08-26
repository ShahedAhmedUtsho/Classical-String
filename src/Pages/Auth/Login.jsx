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
const Login = () => {
const {user,loading,error,message,success,logOut,googleLogin,register,passwordLogin,Alert,setUser,setLoading} = useAuth()
    const navigate =useNavigate()
    const [searchParams]= useSearchParams()


    const logInSchema = z.object({
        email: z.string().email({ message: "Provide a valid email" }),
        password:z.string()
      })

  
      

      const LoginForm = useForm({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email:"",
            password:"" ,
        },
      })
    


const handleLogin = async(value)=>{
    try{
        setLoading(true)
const res = await passwordLogin(value.email,value.password);
const user = res.user ;
setUser(user)

        Alert("default","welcome back", "you are logged in successfully") ;
        navigate("/")
    } catch (error){
        Alert("destructive","Registration Failed",error.message);
    } finally{
        setLoading(false)
    }
    
}






    return (
       
  
           
          
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
           
          </CardHeader>
          <CardContent >
          <Form {...LoginForm}>
      <form onSubmit={LoginForm.handleSubmit(handleLogin)} className="space-y-2">
    
      <FormField className="!my-0 !mb-0 lg:my-0 !pb-0"
          control={LoginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
            

          )}
        />
        <FormField 
          control={LoginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
            

          )}
        />
        
        
       
        <Button className="w-full !mt-10" type="submit" >Register</Button>
      </form>
      
    </Form>
    </CardContent>
        </Card>
      
    
      
        
    );
};



export default Login;