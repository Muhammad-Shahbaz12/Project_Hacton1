import Image from "next/image"
export default function Footer(){
    return(
        <main className="w-[100wh]   lg:h-[590.15px] h-[1185px] bg-black  lg:pt-[155px">
        <div>
        <div className="w-[1170px] h-[142.62px] flex  flex-col mx-[15px] lg:flex-row gap-[25px] lg:items-center lg:justify-center lg:gap-[125px] lg:mx-auto">
                <div >
                    <h1 className="text-white w-[439px] h-[40px] lg:text-[32px]  text-[24px] leading-[32px] lg:leading-[40px] font-bold "><span className="text-orange-400">Sti</span>ll You Need Our Support?</h1>
                    <p className="text-white w-[458px] h-[24px] lg:text-[16px] text-[14px] leading-[22px] lg:leading-[24px] font-normal ">Don't wait make a smart & logical quote here.its pretty easy</p>
                   
                </div>
                <div>
                <div className="flex flex-row">
                    <div className="">
                    <textarea
                     className='"w-[300px] h-[56px] px-[25px] py-[15px]  bg-orange-500 rounded-[4px] text-white font-bold text-[16px]'  
                    id="message"
                    placeholder='Enter your Email Here!.'
                    ></textarea>
                    
                    </div>
                    <div> 
                        <button className="w-[150px] h-[56px] px-[15px] py-[15px]  bg-white text-orange-500  font-normal text-[16px]">Subscribe</button>
                    </div>
                    
                </div>

            </div>
            
        </div>
        <div className="lg:w-[1170px]  h-[5px] bg-orange-500 mt-[25px] mx-auto"></div>
        </div>


        <div className=" mt-[45px] lg:mx-[125px] mx- flex flex-wrap gap-[45px] mx-[75px]">
           <div> <h1 className="w-[114px] h-[32px] text-white text-[24px] font-bold leading-[32px] mt-[9px]">About us </h1>
            <p className="w-[312px] h-[95px] text-white text-[16px] font-bold leading-[24px] mt-[9px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque, dolores inventore vel iusto placeat quos eum mollitia saepe quibusdam deserunt, odit ipsum, adipisci officiis?</p>
        <div className="flex flex-row gap-5">
        <Image className="mt-[45px]"
        src={'/Years of Experienced (1).png'}
        alt=""
        width={78}
        height={72}/>
        <div>
        <p className="w-[137.77px] h-[25.84px] text-[18px] mt-[45px] text-white font-normal leading-[26px]">Opening Hourse</p>
        <p className="w-[137.77px] h-[25.84px] text-[14px] text-white font-normal leading-[22px]">Mon-sat(8:00-6:00)</p>
        <p className="w-[137.77px] h-[25.84px] text-[12px] text-white font-normal leading-[22px]">Sunday - closed</p></div>
        </div></div>
         <div className="w-[143.41px] h-[267px]">
            <h1  className="w-[143px] h-[32px] text-[24px] font-bold text-white leading-[32px]">Useful Links</h1>
            <p className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">About</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">News </p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Partner</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Team</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Menu</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Contact</p>
         </div>

         <div className="w-[143.41px] h-[267px]">
            <h1  className="w-[143px] h-[32px] text-[24px] font-bold text-white leading-[32px]">Help?</h1>
            <p className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">FAQ</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Team & condition</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Reporting</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Documentation</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Support Policy</p>
            <p  className="w-[143px] h-[32px] text-[16px] font-bold text-white leading-[32px]">Privercy</p>
         </div>
         <div>
            <h1 className="w-[139px] h-[32px] text-[24px] font-bold leading-[32px]  text-white">Recent Post</h1>
            <Image className="mt-[15px]"
            src={'/Resent post cadr 1.png'}
            alt=""
            width={224}
            height={53}/>
             <Image className="mt-[15px]"
            src={'/Resent post cadr 1.png'}
            alt=""
            width={224}
            height={53}/>
             <Image className="mt-[15px]"
            src={'/Resent post cadr 1.png'}
            alt=""
            width={224}
            height={53}/>
            
         </div>
        
        
        </div>
        <div className="bg-orange-500 w-[100wh] lg:h-[100px] h-[75px] flex flex-row lg:gap-[35px] mt-[45px]">
            <div className="w-[384px] h-[24px]  text-white lg:text-[12px] text-[9px]  mt-[25px] lg:mt-0 lg:leading-[32px]  px-[15px] lg:py-[35px] mx-[45px]">Copyright @ 2022 by Ayeman. All right recived</div>

            <div className="flex flex-row  my-[20px] lg:mt-0 gap-[px] ">
                <Image className="lg:mr-0 lg:justify-end lg:items-end lg:mx-[195px] lg:my-[25px]"
                 src={'/1.png'}
                 alt=""
                 width={220}
                 height={15}
                />
                  <Image className="lg:mr-0  my-[] lg:justify-end lg:items-end  lg:mx-auto  lg:gap-[48px]"
                 src={'/Rectangle 8925.png'}
                 alt=""
                 width={540}
                 height={48}
                />
            </div>
        </div>
        </main>
    )
}