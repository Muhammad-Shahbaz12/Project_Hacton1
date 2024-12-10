import Image from "next/image"
export default function Ourchef(){
    return(
        <div className="w-[100wh] lg:h-[657px] h-[1863px] bg-black lg:pt-[175px]">
                
             <Image className=" flex mx-auto  pt-[45px] "
            src={'/Chefs (1).png'}
            alt=""
            width={177}
            height={40}/>
            <h1 className="w-[329px] h-[56px] text-white leading-[56px] text-center mx-auto text-[48px] font-bold"><span className="text-orange-400">Me</span>et Our Chef</h1>
            <div className=" flex flex-row  mt-[35px]">
            
<div className="flex flex-wrap w-[1350px]  gap-[15px] mx-[95px] lg:mx-[25px] ">
            <div>
            <Image className="  "
            src={'/Chef card.png'}
            alt=""
            width={312}
            height={391}/>
            </div>

            <div>
            <Image className="  "
            src={'/Card 2.png'}
            alt=""
            width={312}
            height={391}/>
            </div> 

            <div>
            <Image className="  "
            src={'/Card 3.png'}
            alt=""
            width={312}
            height={391}/>
            </div>

            <div>
            <Image className="gap-[25px]  "
            src={'/Card 4 (1).png'}
            alt=""
            width={312}
            height={391}/>
            </div>
            </div>  
            </div>
        </div>
    )
}