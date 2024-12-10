import Image from "next/image"
export default function Fooditem(){
    return(
        <div className="w-[100wh] lg:h-[489px] h-[1500px] bg-black ">
            <Image className=" flex mx-auto "
            src={'/Food Category.png'}
            alt=""
            width={177}
            height={40}/>
            <h1 className="w-[446px] h-[56px]  text-[48px] leading-[56px] font-bold text-white flex text-center mx-auto">
                <span className="text-orange-400">Ch</span>oose Food iteam</h1>
                <div className="w-[1320px] h-[329px] lg:mx-[45px] mx-[85px] flex flex-col lg:flex-row gap-[25px]  mt-[25px]">
                    <div>
                    <Image
                    src={'/unsplash_-lHZUkiWM74.png'}
                    alt=""
                    width={305}
                    height={328}/></div>

                    <div>
                    <Image className=""
                    src={'/unsplash_MRHyv-hHxgk.png'}
                    alt=""
                    width={305}
                    height={328}/></div>
                    

                    <div>
                    <Image
                    src={'/unsplash_q54Oxq44MZs.png'}
                    alt=""
                    width={305}
                    height={328}/>
                    </div>


                    <div>
                    <Image
                    src={'/unsplash_MRHyv-hHxgk.png'}
                    alt=""
                    width={305}
                    height={328}/>
                    </div>

                </div>

        </div>
    )
}