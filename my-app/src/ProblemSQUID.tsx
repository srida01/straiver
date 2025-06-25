import { useParams } from "react-router-dom";
import storedData from "./src/data";
import { FloatingDock } from "./components/ui/floating-dock";
import  Logoi from "./assets/icons/home.svg"
import  CodeIcon  from "./assets/icons/code.svg"
import logot from "./assets/icons/notes.svg"
import logof from "./assets/icons/chart.svg"
import logofi from "./assets/icons/user.svg"
import Button from "./components/ui/checkboxinsquid";
import { useState } from "react";

const SnvtoRC = ({snv}:{snv:string}) => {
  return (
    <div className="HOME">
      <img src={snv} alt="Your SVG" />
    </div>
  );
};


{/*function display(){
    var qu:number;
    qu=-1;
 const { rid,qid }=useParams();
 const arr=storedData.find(arr1=>(arr1.id===rid))
 const quesdata=arr?.subtopics.find((x)=>{
   var arr2=x.data;
   var y;
   for(var i=0;i<arr2.length;i++){
    if(arr2[i]===qid){
        qu=i;
        y=true;
       return y; 

    }
    
   }
   return false;
})

   return (quesdata?.description[qu])
}


   



export default function ProblemSQUID(){
  
   return(<p>{display()}</p>);

}*/}
export default function ProblemsSQUID(){
    type Items=
    { title: string; icon: React.ReactNode; href: string }
    const[Dis,setDis]=useState(false)
    const han=():void=>{
     
  setDis(!Dis)
  
}
const [code, setCode] = useState('');

    
const INtems:Items[]=[{title:"Home",icon:<SnvtoRC snv={Logoi} />,href:"/Home"},{title:"Problems",icon:<SnvtoRC snv={CodeIcon}/>,href:"/Problems"},{title:"Progress",icon:<SnvtoRC snv={logof}/>,href:"/Progress"},{title:"Profile",icon:<SnvtoRC snv={logofi}/> ,href:"/Profile"}]
    return(
        <>
        <div className="bg-[#0e1a2b] h-screen">
            <FloatingDock items={INtems} desktopClassName="bg-white/10 " />
        <div className=" flex">
            <div>
          <div className="text-black h-[30vw] w-[45vw] bg-[#15DADD] ml-8 mt-8">
            
           </div>
           <div className="ml-8 flex ">
             <Button fun={han}/>
             {Dis &&(<textarea className="bg-white w-[30vw] h-[10vw] overflow-auto" placeholder="add notes" style={{width:"100%"}}/>) }
           </div>
           
            </div>
           
           <textarea className="bg-[#15DADD] w-[30vw] h-[30vw] mt-8 ml-8 overflow-auto" placeholder="//Enter your code" style={{width:"100%"}}/>
        </div>
        </div>
        
        </>
    )
}