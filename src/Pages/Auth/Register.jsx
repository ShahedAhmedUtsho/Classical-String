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
import { updateProfile } from 'firebase/auth';
import Auth from '@/Firebase/firebase.config';
const Register = () => {
const {user,loading,error,message,success,setUser,logOut,googleLogin,register,passwordLogin,setLoading , Alert} = useAuth()
    const navigate = useNavigate()
    const [searchParams]= useSearchParams()


      const registerSchema = z.object({
        email: z.string().email({ message: "Provide a valid email" }),
        username: z.string().min(2).max(50),
        password: z.string().min(6,{message:"give at least six character"})
       
      });
      

    
      const registerForm = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          username: "",
          email:"",
          password:"" ,

        },
        
      })



const handleRegister = async(value)=>{
try{
setLoading(true) ;
const res = await register(value.email,value.password)


const up = await updateProfile(Auth.currentUser , {
    displayName: value.username 
})


Alert("default","Register Successful","you are created your account successfully");
navigate("/") ;

}catch(error){
    Alert("destructive","Registration Failed",error.message);
}finally{

    setLoading(false)
}


    
}





    return (
        
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            
          </CardHeader>
          <CardContent >
          <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-2">
      <FormField
          control={registerForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
            

          )}
        />
      <FormField className="!my-0 !mb-0 lg:my-0 !pb-0"
          control={registerForm.control}
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
          control={registerForm.control}
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



export default Register;