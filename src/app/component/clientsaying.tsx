import Image from "next/image"
export default function Clientsaying(){
    return(
        <div className="bg-black w-[100wh] lg:h-[1170px] h-[950px] lg:pt-[275px]  ">
            <Image className="mx-[45px] "
            src={'/Group 1000002250 (6).png'}
            alt=""
            width={177}
            height={40}/>
            <h1 className="lg:w-[599px] w-[100wh] lg:h-[56px] lg:mt-[18px] text-white   leading-[56px] font-bold lg:text-[48px] text-[24px] mx-[45px]">What our client are saying</h1>
            
            <div className="lg:w-[700px] lg:h-[600px] w-[450px]  h-[550px] relative  flex items-center mx-auto  bg-white mt-[85px]">
           
           <div className="absolute lg:w-[133px]  lg:h-[33px] lg:top-[-65px] lg:left-[275px] left-[155px] top-[-55px]  ">
           <Image
            src={'/Ellipse 6.png'}
            alt=""
            width={132.87}
            height={33}/>
           </div>
          
           <div className="absolute lg:top-[125px] lg:left-[265px] top-[99px] left-[155px] ">
           <Image
            src={'/Testimonials.png'}
            alt=""
            width={132.87}
            height={33}/>
           </div>

           <div className="w-[400px] mx-auto  ">
            <h1 className="text-[18px] leading-[26px] font-bold mx-auto justify-center  text-black text-center lg:mt-[45px] mt-[-45px]">Lorem ipsum dolor, sit a is a amet consectetur adipisicing elit. Earum, sequi. Voluptatibus at, voluptas tempora, ut ipsum   quae placeat expedita. Facilis?</h1>
           </div>
           <div className="absolute lg:top-[440px] top-[375px] lg:left-[256px] left-[175px]">
           <Image className="mx-[25px]"
            src={'/star.png'}
            alt=""
            width={151.91}
            height={23.99}/>
              <div className="mt-[18px]"> 
            <h1 className="text-[24px] leading-[32px] font-bold text-black">Alamina Hassan</h1>
            <p className="text-[16px]  leading-[24px] font-bold  text-black mx-[30px] mt-[12px]">Food Specialist</p>
           </div>
           </div>
         

            </div>
         
            <div className="flex mx-auto justify-center items-center h-[100px] bg-black">
            <Image className="mx-[25px]"
            src={'/Dot.png'}
            alt=""
            width={86}
            height={16}/>

            </div> 
           
        </div>
    )
}