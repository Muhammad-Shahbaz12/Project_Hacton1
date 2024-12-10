import Image from "next/image"

export default function ExtraExperience(){
    return(
        <div className="bg-black w-[100wh] lg:h-[716px] h-[1528px]  flex flex-wrap gap-[36px] lg:pt-[85px]  lg:gap-[45px]">
            <div className=" w-[700px] lg:h-[650px] mt-[45px] flex flex-wrap lg:mx-[45px]  ">
            <div className=" h-[270px]  w-[600px]">
            <div className="w-[230px] h-[250px]  flex flex-row gap-[15px] ">
            <Image className=""
            src={'/unsplash_lP5MCM6nZ5A.png'}
            alt=""
            width={342}
            height={356}/>

            <Image className="mt-[45px]"
            src='/unsplash_dphM2U1xq0U (1).png'
            alt=""
            width={381}
            height={231}/>
            </div>
            </div>

            <div className="flex flex-wrap gap-[15px]">
            <div className="flex flex-row gap-[15px]">
            <Image className="mt-[15px]"
            src='/unsplash_CLMpC9UhyTo.png'
            alt=""
            width={244}
            height={306}/>
             <Image className="py-[45px]"
            src='/unsplash_-GFCYhoRe48.png'
            alt=""
            width={221}
            height={226}/>
            </div>
            <div className="flex flex-row  lg:flex-col  gap-[15px]">
            <Image className=""
            src='/unsplash_tzl1UCXg5Es.png'
            alt=""
            width={161}
            height={168}/>
             <Image className=""
            src='/unsplash_mmnKI8kMxpc.png'
            alt=""
            width={161}
            height={168}/>
            </div>
            </div>
            </div>
        
        <div className="w-[500px] h-[716px] gap-[25px] mx-[15px] lg:mx-0 ">
            <Image
            src={'/Food Category.png'}
            alt=""
            width={175}
            height={40}/>
        <h1 className=" bg-black w-[533px] h-[112px] text-white text-[48px] leading-[58px] font-bold my-[25px]" ><span className="text-orange-400">Ex</span>tra ordinary taste And Experienced</h1>
        <p className=" bg-black w-[433px] h-[112px] text-white text-[16px] leading-[24px] font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus maiores dolorum porro. Maiores, eligendi nesciunt. Voluptatibus voluptatem ratione fuga suscipit quis veritatis, quasi rerum.</p>
        <div className="mt-[25px]">
            <Image className="my-[15px]"
            src={'/Icxon box.png'}
            alt=""
            width={374}
            height={135}/>


            <div className="w-[374px] h-[93px] bg-white flex flex-row">
                <div className="bg-orange-500 w-[15px] h-[93px]">
                </div> 
                <div className="text-[55px] font-bold leading-[24px] text-orange-500 py-[35px] ml-[45px]">30+</div>
                <div> <h1 className="text-[24px] font-bold leading-[32px] text-black py-[15px] ml-[45px]"> Year of <br/> Experenced</h1>
               
               

            </div>
        </div>
        
        </div> 

        </div>

        </div>


    )
}