
import Image from "next/image"
export default function Herosection(){
  return(
    <div className="flex  flex-wrap bg-black mx-auto" >
       <div className="flex flex-row">
      <div>
        <Image className="lg:mx-[45px] mx-[15px] mt-[25px]"
        alt=""
        src={'/Group 1000002057.png'}
        width={25}
        height={75}/>
      </div>

        <div className="w-[472px] h-[356px]  flex flex-wrap  mt-[45px] ">
        <Image className=" mt-[45px]  " 
        src={'/Food Category.png'}
        alt=""
        width={249}
        height={40}/>
      <h1 className=" lg:text-[22px] text-[18px] text-white leading-[32px] font-bold"> The Art Of Speed Food Quality</h1>
      <p className=" lg:text-[18px]  text-white leading-[18px]] font-normal"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Numquam delectus obcaecati exercitationem tempore praesentium minima!</p>
        <button className="w-[190px] h-[60px] rounded-[30px]   bg-orange-400 ">
            See menu</button>
      </div></div>

      <Image
          src={'/Image.png'}
          alt=""
          width={677.8}
          height={670}
        />
 
      </div>
     
        
      
     
       
  
  )
}

