
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import Auth from '../Firebase/firebase.config'
import { useToast } from '@/components/ui/use-toast';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const {toast} = useToast()
    const [user,setUser] = useState(null)
const backUrl = import.meta.env.VITE_BACKEND
    const [loading,setLoading] = useState(true) ; 
    const [error,setError] = useState("") ;
    const [success,setSuccess] = useState("");
    const [message,setMessage] = useState("")

const Alert = (variant,title,description)=>{
    toast({
        variant: variant,
        title:  title,
        description: description,

       
    })
}
    useEffect(()=>{
const unsubscribe = onAuthStateChanged(Auth,(user) =>{
try{
    setUser(user) ; 
    console.log(user)

}catch (error){
    console.log(error)

}finally{
    setLoading(false)
}
})




return ()=>{
unsubscribe()
}

    },[])

const logOut = async()=>{
    try {
        signOut(Auth) ;
        setUser(null)
        console.log("logout")


    } catch (error) {
        console.log(error)
        
    }
    
    
}
const googleProvider = new GoogleAuthProvider()
const googleLogin = ()=>{
   return signInWithPopup(Auth,googleProvider)

}
const passwordLogin = (email,password)=>{
    return signInWithEmailAndPassword(Auth,email,password)

}
const register = (email,password)=>{
    return createUserWithEmailAndPassword(Auth,email,password)
}







    const send={user,backUrl,loading,error,message,success,logOut,googleLogin,register,passwordLogin,Alert,setLoading,setUser}
    return (
        <AuthContext.Provider value={send}>
{children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;