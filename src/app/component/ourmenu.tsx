import Image from "next/image"
export default function Ourmenu(){
    return(
        <main className="w-[100wh] lg:h-[696px] h-[1556px] bg-black lg:pt-[155px] ">
            <div className="mx-auto  justify-center text-center flex flex-col ">
            <Image className=" flex  flex-col mx-auto mt-[45px] "
            src={'/Food Category.png'}
            alt=""
            width={177}
            height={40}/>
            <h1 className="w-[446px] h-[56px]  text-[48px] leading-[56px] font-bold  text-white flex text-center mx-auto">
                <span className="text-orange-400">Fr</span>om Our Menu</h1>
               
            </div>
            <div className="flex flex-row lg:gap-[85px] gap-[45px] mx-auto justify-center items-center mt-[25px]">
                <p className="list-style-none text-white">Breakfast </p>
                <p className="list-style-none text-white">Lunch</p>
                <p className="list-style-none text-white">Dinner</p>
                <p className="list-style-none text-white">Desert</p>
                <p className="list-style-none text-white">Snaks</p>
                <p className="list-style-none text-white">Suops</p>
            </div>
            <div className="flex flex-wrap gap-[45px] mx-[45px] mt-[45px] ">
                <div className="">
                     <Image className=""
                    src={'/unsplash_Lv174o7fn7Y.png'}
                    alt=""
                    width={366}
                    height={362}/>
                </div>

                <div className="flex flex-wrap  w-[800px] " >
    
                    <div className="flex flex-wrap gap-[9px]">
                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (1).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>

                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (2).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>

                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (3).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>


                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (4).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>
                    </div>

                    <div className=" flex flex-wrap gap-[9px]">
                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (5).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>



                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (6).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>




                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (7).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>


                    <div>
                    <Image className="mt-[25px]"
                    src={'/Lettuce Leaf (2).png'}
                    alt=""
                    width={376}
                    height={79}/>
                    </div>
                    </div>
                    </div>
                </div>
            
           
        </main>
    )
}