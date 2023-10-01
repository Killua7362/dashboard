import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

const BasePageLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <NavBar/>
            <SideBar/>
            <div className="pt-[4.6rem] pl-[12.4rem]">
                {children}
            </div>
        </div>
      );
}
 
export default BasePageLayout;