import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] ">
    <div className="font-bold text-5xl flex gap-2 justify-center items-center">By Me A Chai <span><img className="invertImg" src="/coffee-13063_256.gif" width={44} alt="" /></span></div>
    <p>A crowdfunding plateform for creaters.get funded by your fans and followers.Start Now!</p>
    <div>
    <Link href={"/login"} ><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
   <Link href={"/About"}><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link> 

    </div>
  </div>
    <div className="bg-white h-1 opacity-10">

    </div>
    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl  font-bold text-center my-2">your fans can buy you a chai</h2>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" src="/man-1835_256.gif" width={88} alt="" />
      <p className="font-bold">Your fans want to help</p>
      <p className=" text-center">your fans available for you to help you</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" src="/rich-4897_256.gif" width={88} alt="" />
      <p className="font-bold">Your fans want to help</p>
      <p className=" text-center">your fans available for you to help you</p>
      </div>
      <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" src="/5bbc92d213e80-74996570c15a1462df932737edcda9ee.png" width={88} alt="" />
      <p className="font-bold">Your fans want to help</p>
      <p className=" text-center">your fans available for you to help you</p>
      </div>

      </div>
    </div>

    <div className="bg-white h-1 opacity-10">

</div>



    <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
      <h2 className="text-3xl  font-bold text-center mb-14">Learn more about us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=F2siCkhhT55dY2-q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </>
  );
}
