import Tooltip from "./styledcompoentscard";
import { Link } from "react-router-dom";
import { FloatingDock } from "./components/ui/floating-dock";
import  Logoi from "./assets/icons/home.svg"
import  CodeIcon  from "./assets/icons/code.svg"
import logof from "./assets/icons/chart.svg"
import logofi from "./assets/icons/user.svg"
const SnvtoRC = ({snv}:{snv:string}) => {
  return (
    <div className="HOME">
      <img src={snv} alt="Your SVG" />
    </div>
  );
};


export default function ProblemS(){
  

     type Items=
    { title: string; icon: React.ReactNode; href: string }


const INtems:Items[]=[{title:"Home",icon:<SnvtoRC snv={Logoi} />,href:"/Home"},{title:"Problems",icon:<SnvtoRC snv={CodeIcon}/>,href:"/Problems"},{title:"Progress",icon:<SnvtoRC snv={logof}/>,href:"/Progress"},{title:"Profile",icon:<SnvtoRC snv={logofi}/> ,href:"/Profile"}]
   return(
   <>
   <div className="h-full bg-[#0e1a2b] overflow-x-hidden">
    <div className="grid place-items-center bg-[#0e1a2b]">
    <FloatingDock items={INtems} desktopClassName="bg-white/10 " />
     <div className="h-40 rounded-l-full  border-l-cyan-400 w-30 border-l-[#0e1a2b] border-t-[#0e1a2b] border-[#0e1a2b] border-5"></div>
     <Link to="/Problems/Learn Basics">
        
       <Tooltip shin={"Level 1"} thin={"Learn basics"}/>
     
     </Link>
    
     <div className="h-60 rounded-r-full  border-r-cyan-400 w-40 border-l-[#0e1a2b] border-t-[#0e1a2b] border-[#0e1a2b] border-5"></div>
     <Link to="/Problems/LearnImportantSortingTechniques">
       <Tooltip shin={"Level 2"} thin={"Sorting techniques"}/>
     </Link>
     <div className="h-60 rounded-l-full  border-l-cyan-400 w-40 border-r-[#0e1a2b] border-t-[#0e1a2b] border-[#0e1a2b] border-5"></div>
     <Link to="/Problems/SolveProblemsonArrays">
       <Tooltip shin={"Level 3"} thin={"Arrays"}/>
     </Link>

    <div className="h-60 rounded-l-full  border-l-cyan-400 w-40 border-r-[#0e1a2b] border-t-[#0e1a2b] border-[#0e1a2b] border-5"></div>
     <Link to="/Problems/Strings(Basicandmedium)">
       <Tooltip shin={"Level 4"} thin={"Strings"}/>
     </Link>
    <div className="w-full h-[20vw]">

    </div>
   
   
   </div>
   
   </div>
   
   </>
   );    
   

}