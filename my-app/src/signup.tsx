import { AuroraBackground } from "./components/ui/aurora-background.tsx";
import SignUpPageButton from "./signin.tsx";


export default function Signup(){
    
    return (
        <>
       <div className='dark'>
      <AuroraBackground className='absolute inset-0 z-10'>
        <h1 className='text-white text-[4rem] font-bold'>YOUR AI DSA WINGMAN</h1>
         <h2 className='text-white text-[2rem]'>DSA the way your brain likes it:organised,adaptive,addicting</h2>
        
         <div className='z-100'>
            <SignUpPageButton/>
         </div>
          
          </AuroraBackground>
          </div>
          
        
        
         

      
        </>
    );
}