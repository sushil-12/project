import BottomBar from "@/components/shared/BottomBar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import TopBar from "@/components/shared/TopBar"
import { useUserContext } from "@/context/AuthProvider"
import { Outlet, Navigate } from "react-router"

const RootLayout = () => {
  const {isAuthenticated} = useUserContext();
  if(!isAuthenticated){
    <Navigate to="/" />
  }
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />  
      </section>
      <BottomBar />      
    </div>
  )
}

export default RootLayout
