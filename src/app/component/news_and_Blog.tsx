import Image from "next/image"
export default function News_and_Blog(){
    return(
        <div className="bg-black w-[100wh] lg:h-[723px] h-[2000px] ">
            <div> 
            <Image className="mx-auto items-center pt-[45px]"
            src={'/Group 1000002250 (6).png'}
            alt=""
            width={91}
            height={40}/>           
                <h1 className="w-[462px] h-[56px] mx-auto text-center lg:mt-[25px] lg:text-[48px] text-[28px] text-white font-bold leading-[56px]">
                    <span className="text-orange-400">La</span>test News & Blog
                </h1>
            </div>
            <div className="mx-[25px]"> 
            <div className="flex flex-wrap gap-[45px] mx-[15px] lg:mx-0">
                <div>
            <Image className="mx-auto items-center bg-black mt-[25px]"
            src={'/Blog Card 1.png'}
            alt="Blog Card 1"
            width={400}
            height={569}/> 
            </div>
            <div>
              <Image className="mx-auto items-center bg-black mt-[25px]"
            src={'/Blog Card 3 (1).png'}
            alt="Blog Card 1"
            width={400}
            height={569}/> 
            </div>
            <div>
              <Image className="mx-auto items-center bg-black mt-[25px]"
            src={'/Blog Card 2.png'}
            alt="Blog Card 1"
            width={400}
            height={569}/> 
            </div>
            </div>
            </div>
            
        </div>
    )
}