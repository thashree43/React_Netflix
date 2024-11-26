import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth,db} from "../Services/firebase"

const AuthContext = createContext(null)

export function AuthContextProvider({children}){
    const[user,setUser] = useState({})
     
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    function signUp(email,password){
       return createUserWithEmailAndPassword(auth,email,password)
    }

    function Login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function Logout(){
        return signOut(auth)
    }

    

    return <AuthContext.Provider value={{user, signUp, Login, Logout}}>{children}</AuthContext.Provider>
}

export function userAuth(){
   return useContext(AuthContext)
}