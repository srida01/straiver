import main from "./gemini";
import { useParams } from "react-router-dom";
import { FloatingDock } from "./components/ui/floating-dock";
import Logoi from "./assets/icons/home.svg"
import CodeIcon from "./assets/icons/code.svg"
import storedData from "./src/data";
import logof from "./assets/icons/chart.svg"
import logofi from "./assets/icons/user.svg"
import Button from "./components/ui/checkboxinsquid";
import { useState } from "react";
import Buttonai from "./button-for-hints";
import Buttonop from "./button-for-optimisation";
import mainsol from "./geminisol";
import mainop from "./geminiop";
import Buttonsol from "./button-for-solution";
const SnvtoRC = ({ snv }: { snv: string }) => {
    return (
        <div className="HOME">
            <img src={snv} alt="Your SVG" />
        </div>
    );
};

var q: string;
var arrp: string[];
function display() {
    var qu: number;
    qu = -1;
    const { rid, qid } = useParams();
    const arr = storedData?.find((arr1: any) => (arr1.id === rid))

    const quesdata = arr?.subtopics.find((x: any) => {
        var arr2 = x.data;
        var y;
        for (var i = 0; i < arr2.length; i++) {
            if (arr2[i] === qid) {
                qu = i;
                y = true;
            
                return y;

            }

        }
        return false;
    }

    )
    arrp = quesdata?.description[qu]
    const arrd = quesdata?.description[qu]
    return arrd?.map((y: string) =>
        <p>{y}</p>
    )

}
function displayEXo() {
    var qu: number;
    qu = -1;
    const { rid, qid } = useParams();
    const arr = storedData?.find((arr1: any) => (arr1.id === rid))

    const quesdata = arr?.subtopics.find((x: any) => {
        var arr2 = x.data;
        var y;
        for (var i = 0; i < arr2.length; i++) {
            if (arr2[i] === qid) {
                qu = i;
                y = true;
                return y;

            }

        }
        return false;
    }

    )
    const arrd = quesdata?.exampleo[qu]
    return arrd?.map((y: string) =>
        <p>{y}</p>
    )

}
function displayEXt() {
    var qu: number;
    qu = -1;
    const { rid, qid } = useParams();
    const arr = storedData?.find((arr1: any) => (arr1.id === rid))

    const quesdata = arr?.subtopics.find((x: any) => {
        var arr2 = x.data;
        var y;
        for (var i = 0; i < arr2.length; i++) {
            if (arr2[i] === qid) {
                qu = i;
                y = true;

                return y;


            }

        }
        return false;
    }

    )

    const arrd = quesdata?.examplet[qu]
    return arrd?.map((y: string) =>
        <p>{y}</p>

    )

}
function clickme() {

    if (typeof q === "string") {
        main(q);
    }
}
function clicksoe() {
    mainsol(arrp);
}
function clickoplme(q:string){
    mainop(q)

}


export default function ProblemsSQUID() {
    type Items =
        { title: string; icon: React.ReactNode; href: string }
    const [Dis, setDis] = useState(false)
     const [Tim, setTim] = useState("");
    const han = (): void => {
       

        setDis(!Dis)

    }
    const { qid } = useParams<{ qid: string }>();

    if (typeof qid === "string") {
        q = qid;
    }

    const INtems: Items[] = [{ title: "Home", icon: <SnvtoRC snv={Logoi} />, href: "/Home" }, { title: "Problems", icon: <SnvtoRC snv={CodeIcon} />, href: "/Problems" }, { title: "Progress", icon: <SnvtoRC snv={logof} />, href: "/Progress" }, { title: "Profile", icon: <SnvtoRC snv={logofi} />, href: "/Profile" }]
    return (
        <>
            <div className="bg-[#0e1a2b] h-full overflow-x-hidden">
                <FloatingDock items={INtems} desktopClassName="bg-white/10 " />
                <div className=" flex flex-column flex-wrap sm-flex-column 2xl-flex-row ">
                    <div>
                        <div className="text-black h-[170vw]  w-[85vw] bg-[#15DADD] ml-8 mt-8">
                            <div className="text-black">{qid}</div>
                            <div className="text-black">{display()}</div>
                            <div className="text-black">{displayEXo()}</div>
                            <div className="text-black">{displayEXt()}</div>
                        </div>
                        <div className="ml-8 flex ">
                            <Button fun={han} />
                            {Dis && (<textarea className="bg-white w-[30vw] h-[10vw] overflow-auto" placeholder="add notes" style={{ width: "100%" }} />)}
                        </div>

                    </div>
                    <div className="w-[50vw]">
                        <textarea className="bg-[#15DADD]  mt-8 ml-2 overflow-auto w-[100vw] h-[30vw]"
                            placeholder="//Enter your code"
                            value={Tim}
                            onChange={(e) => setTim(e.target.value)}
                            style={{ width: "100%" }} />
                        <div className="flex ml-0">
                            <Buttonai click={clickme} />
                            <Buttonsol click={clicksoe} />
                            <Buttonop click={ ()=>clickoplme(Tim)}/>
                            
                        
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}