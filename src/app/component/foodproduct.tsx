import Image from "next/image"

import Input from "postcss/lib/input"

export default function Foodproduct(){
    return(
    
        <div className="w-[100wh] lg:h-[762px] h-[1162px]  bg-black flex lg:flex-row flex-col "> 

        <div className="w-[562px] h-[562px] top-[1070px] left-[300px]  lg:mx-[70px] mx-[25px]   ">
            <Image
            src={'/'}
            alt=""
            width={91}
            height={40}/>
            <h1 className=" text-white w-[446px] lg:mx-[70px] md:mx-[5px] h-[110px] lg:text-[48px] text-[38px]  leading-[56px] font-bold top-[1118px] left-[300px] mt-[22px]">
            <span className="text-orange-400">We </span>Create the best foody product
            </h1>
            <p className=" text-white w-[446px]  lg:mx-[70px]  h-[110px] lg:text-[18px]  leading-[24px] font-normal top-[1118px] left-[300px] lg:my-[45px] py-[15px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem consectetur eveniet obcaecati quasi. Ratione beatae aspernatur iure reiciendis a earum, inventore, quaerat libero officiis magni voluptatum enim aliquid eos dignissimos, ipsam animi vitae nostrum accusamus corporis sunt and  repellat.
            </p>
            <p className="w-[465px] h-[26px] lg:text-[18px] lg:mx-[70px]  text-white leading-[26px] font-normal mt-[55px]">Lacus nisi, at ac dapibus sit eu velit in consequat.</p>
            <p className="w-[465px] h-[26px] lg:text-[18px] lg:mx-[70px] text-white leading-[26px] font-normal my-[15px]">Quisque diam pellentesque non dul volutpat fringilla</p>
            <p className="w-[465px] h-[26px] lg:text-[18px] lg:mx-[70px] text-white leading-[26px] font-normal my-[15px]"> Lorem ipsum dolor sit amet.consectetur adipscing elit</p>
            
            <div className="md:mx-auto md:flex md:justify-center">
            <button className="bg-orange-400 text-white  w-[190px]  md:mx-[15px] lg:mx-[70px] h-[60px]  rounded-[30px] my-[22px]">
                Read More
            </button></div>

       </div>

       <div className="w-[758px] h-[362px] gap-[25px] mt-[45px] md:mx-[15px] ">
        <div className="w-[] h-[] ">
        <Image className=""
        src={'/unsplash_fdlZBWIP0aM.png'}
        alt=""
        width={485}
        height={300}
        /></div>
        <div className="w-[758px] h-[232px] gap-[18px] flex flex-row mt-[25px]">
        <Image
            src={'/unsplash_jpkfc5_d-DI.png'}
            alt=""
            width={235}
            height={194}/>
            <Image
            src={'/unsplash_mAQZ3X_8_l0.png'}
            alt=""
            width={235}
            height={194}/>

      

        </div>

       </div>

        </div>

    )
}