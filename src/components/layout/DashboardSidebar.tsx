import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";



async function DashboardSidebar({ children }:any) {
  return (
    <div className="mt-20 flex justify-between">
      <div className=" flex flex-col rounded-[10px] w-56 h-fit py-7 px-4 ml-10 shadow-[#304ffe4a] shadow-[0_4px_15px] items-center">
        <CgProfile className="text-[#304ffe] text-5xl" />

        <Link className="mx-0 my-1 w-full font-normal transition-all duration-100 ease-in-out hover:scale-105" href="/users"> users</Link>
        <Link className="mx-0 my-1 w-full font-normal transition-all duration-100 ease-in-out hover:scale-105" href="/todos">Todo</Link>
        <Link className="mx-0 my-1 w-full font-norma transition-all duration-100 ease-in-out hover:scale-105" href="/posts">posts</Link>
        
        <button 
    className="flex bg-none  cursor-pointer text-[#db0505] text-right text-base w-full border-none mt-5 transition-all duration-100 ease-in-out hover:scale-105"
     >
      <FiLogOut className="text-[#db0505] ml-1 text-xl"/>
      <Link href="/">
      Exit
      </Link>
    </button>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
