import { useParams } from "react-router-dom";
import storedData from "./src/data";
import Checkbox from "./components/checkbutton";
import { FloatingDock } from "./components/ui/floating-dock";
import Switch from "./components/switch";
import Button from "./buttonforproblems";



import Buttonpr from "./components/button-prob";
import  Logoi from "./assets/icons/home.svg"
import  CodeIcon  from "./assets/icons/code.svg"
import { NavLink } from "react-router-dom";
import logof from "./assets/icons/chart.svg"
import logofi from "./assets/icons/user.svg"



const SnvtoRC = ({snv}:{snv:string}) => {
  return (
    <div className="HOME">
      <img src={snv} alt="Your SVG" />
    </div>
  );
};


function display(){
   const {rid}=useParams();
    
    
    
  const reqarob=storedData?.find((arr:any)=>arr?.id===rid);
       const dimi=reqarob?.subtopics;
        console.log(rid);
        console.log(dimi);
        return dimi?.map((num:any,index:number )=>(
                 
                <div  key={index}>
              <p  className="py-5 text-white">{num.head}</p  >
          
                  
                        { num.data?.map((s:string,x:number)=>(
                       <div key={x} className="grid grid-cols-5 gap-5 hover:bg-[#15dadd]  p-3">
                        
                        
                         <Checkbox />
                       
                         
                        <div className="text-white">{s}</div>
                        
                        <NavLink to={`/Problems/${rid}/${s}`}>
                        <Button/>
                        </NavLink>
                        
                    
                        <Buttonpr/>
                        <Switch/>
                         
                       </div>
                       
                      
                    
                )
            )
            }
            </div>
                 
                  
                    
                
                
            
               
                    
                
            
        
               
            )

            )
         
       }
export default function ProblemSID(){
 
 const {rid}=useParams();
 
type Items={ title: string; icon: React.ReactNode; href: string }

const INtems:Items[]=[{title:"Home",icon:<SnvtoRC snv={Logoi} />,href:"/Home"},{title:"Problems",icon:<SnvtoRC snv={CodeIcon}/>,href:"/Problems"},{title:"Progress",icon:<SnvtoRC snv={logof}/>,href:"/Progress"},{title:"Profile",icon:<SnvtoRC snv={logofi}/> ,href:"/Profile"}]

    
       
    

  return( 
    <>
    
    <div className="bg-[#0e1a2b] pl-10 overflow-x-hidden h-full">
      <FloatingDock items={INtems} desktopClassName="bg-white/10 " />

      <div className="text-white">{rid}</div>
    
        <div className="w-full">{display()}</div>
       <div className="bg-[#0e1a2b h-[20vw]">

       </div>
    
    </div>
   
    </>
  );
}