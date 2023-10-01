import { UserButton} from "@clerk/nextjs";
const NavBar = () => {
    return (
        <div className="w-full fixed h-14 bg-[#212121] z-40 flex justify-between items-center px-6 text-white">
            <div className="text-[24px] ml-40">
             Hey Akshay   
            </div>
            <div className="text-[16px]">
                <UserButton/>
            </div>
        </div>
      );
}
 
export default NavBar;