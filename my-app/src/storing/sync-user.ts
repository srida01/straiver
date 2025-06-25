import { supabase } from "../lib/supabase";
import { useUser } from "@clerk/clerk-react";

import { useEffect } from "react";





export default function Sync():null{
const supdb=supabase();
const {user}=useUser()
useEffect(()=>

{const Synsupa:any=async()=>{
 const Num= user?.primaryPhoneNumber?.phoneNumber;
const ema= user?.primaryEmailAddress?.emailAddress;
const name=user?.fullName;
const userid=user?.id
    console.log(Num)
    console.log(ema)
    console.log(name)
    console.log(userid)
    const {data,error} = await supdb
    .from("users")
    .select("*")
    .eq("phone_number",Num)
    console.log(data)
     if(error)
        console.log("fetch error")
    

    if(!data || data.length===0)
    {if(ema!==null && name!==null && Num!==null)
    {
       await supdb
    .from("users")
    .upsert([{email:ema , first_name:name,phone_number:Num }])
    } 
    }
   
    else
    console.log("error")

}
Synsupa();
},[user]);
return null
}


