const SideBar = () => {
    return (
        <div className="h-full w-44 bg-[#212121] fixed z-50 flex flex-col">
            <div className="text-white text-xl  h-14 flex justify-center items-center">
                Dashboard
            </div>
            <div className="text-xl  h-14 flex justify-center items-center bg-[#D9D9D9] text-black">
                Medium
            </div>
        </div>
      );
}
 
export default SideBar;