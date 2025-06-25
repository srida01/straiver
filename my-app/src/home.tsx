import Sync from "./storing/sync-user";
import { UserButton } from "@clerk/clerk-react";
import { BackgroundBeams } from "./components/ui/background-beams";
import Card from "./styled-components";
import  Logoi from "./assets/icons/home.svg"
import  CodeIcon  from "./assets/icons/code.svg"

import logof from "./assets/icons/chart.svg"
import logofi from "./assets/icons/user.svg"
import { FloatingDock } from "./components/ui/floating-dock";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import { TextGenerateEffect } from "./components/text-generate";
import { StickyScroll } from "./components/scroll";

type Content= {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  };
const ContentProps:Content[]=[{title:"Fundamentals",description:"The Fundamentals section covers the essential building blocks of programming and problem-solving. It includes core topics like arrays, strings, basic hashing, and linked list operations that form the foundation of most coding interviews. These problems are designed to teach how to manipulate data, understand control flow, and grasp common patterns like prefix sums and sliding windows. Mastering this section ensures you’re well-prepared to handle more advanced challenges.",content:"array"},{title:"Moderate",description:"The Moderate section introduces more complexity with optimized techniques like two-pointers, binary search, recursion, and graph traversal. Problems here often require combining multiple concepts to solve efficiently. You'll encounter real-world patterns like interval scheduling, greedy decision-making, and classic recursive backtracking problems like permutations and combinations. This stage builds your algorithmic thinking and prepares you for harder problems by improving both depth and speed.",content:"stack"},{title:"Difficult",description:"The Difficult section dives into complex, multi-step problems that demand a deep understanding of data structures and algorithms. Topics include advanced dynamic programming, trie and segment tree implementations, disjoint set union, hard graph algorithms (like Dijkstra, Floyd-Warshall), and intricate linked list manipulations. These problems mimic real-world system-level challenges and are often used by top tech companies to test elite problem-solving ability. Solving these sharpens your edge for competitive coding and high-stakes interviews.",content:"graph"}];
const SnvtoRC = ({snv}:{snv:string}) => {
  return (
    <div className="HOME">
      <img src={snv} alt="Your SVG" />
    </div>
  );
};



export default function Home(){
    type Items=
    { title: string; icon: React.ReactNode; href: string }

const INtems:Items[]=[{title:"Home",icon:<SnvtoRC snv={Logoi} />,href:"/Home"},{title:"Problems",icon:<SnvtoRC snv={CodeIcon}/>,href:"/Problems"},{title:"Progress",icon:<SnvtoRC snv={logof}/>,href:"/Progress"},{title:"Profile",icon:<SnvtoRC snv={logofi}/> ,href:"/Profile"}]
    return(
        <>
    <div className="flex flex-col">
       

        <BackgroundBeams className='absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#0e1a2b] to-[#0f2c40] z-0' > 
           
        <div className='absolute z-30 w-full'>
            <div className='flex flex-row ml-0 mt-13 md-flex-column'>
            <UserButton/>
            <FloatingDock items={INtems} desktopClassName="bg-white/10 " />
               </div>
                 <Sync />
                 <div className="grid place-items-center h-full ">
                    <TextRevealCard text="  STRAIVER" revealText="  STRAIVER" className="w-60 h-20 px-1 py-0 m-5 b-0"/>
                    <TextGenerateEffect words="Think less about *what’s next* and more about *why it works.*" className="text-white"/>
        
                    
                 </div>
                 
           <div className="relative  flex flex-col">
           <div className="mt-25 ml-70">
              <Card />
           </div>
            
             <div className="w-f h-auto  z-0">
            <StickyScroll content={ContentProps}/>
           <div className="w-full h-15 bg-[#171717]"></div>
            </div>
            </div>
            </div>
            
        </BackgroundBeams>
    
        
    </div>
    

        
        
         </>
        
        
    );
}