'use client'
import { UserButton, useSession, useUser} from "@clerk/nextjs";

const NavBar = () => {
    const user = useUser()  
    console.log()
    return (
        <div className="w-full fixed h-14 bg-[#212121] z-40 flex justify-between items-center px-6 text-white">
            <div className="text-[24px] ml-40">
             {user?.user?.firstName && `Hey ${ user?.user?.firstName }`  }  
            </div>
            <div className="text-[16px]">
                <UserButton/>
            </div>
        </div>
      );
}
 
export default NavBar;