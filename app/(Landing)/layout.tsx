import Navbar from "@/components/Navbar";

const LandingLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return ( 
        <div className="w-full dark:bg-[#1F1F1F]">
            <Navbar/>
            <div className="h-full pt-40">
            {children}
            </div>
            
        </div>
     );
}
 
export default LandingLayout;