import Nike1 from "../assets/n1-min.png"


export function ShoeDetail() {
  return (
  <div className="flex flex-col lg:flex-row-reverse ">
  {/* show image */}
  
    <div className="flex-1">
<div className="bg-gradient-to-br from-[#F537CE] from-5% via-[#E4CF7B] via-40% to-[#78D5AF]">   
   <img src={Nike1} alt="" />
</div>
    </div>

{/* show text details */}

    <div className="flex-1 space-y-6  ">
    <div className="text-5xl font-bold md:text-9xl">Nike Air Max 270
    </div>
    <div className="font-medium md:text-xl">
      {"The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."}
    </div>
    <div className="text-3xl font-extrabold md:text-3xl">{"160 $"}
    </div>

    {/* show buttons and links */}
    <div className="space-x-10">
    <button className="bg-black text-white h-14 w-44 hover:bg-gray-900 active:bg-gray-700 ">
    Add to bag
    </button>
    <a href="#" className="underline underline-offset-4 text-lg font-bold">
    View details  
    </a>
    </div>
    </div>
  
  
  
  
    </div>
    )

}

 