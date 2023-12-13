
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Proj from "./Proj";

function Home() {
   return (
      <>
         <Nav/>
         <div className="flex items-center justify-center h-[15vh]">
            <span className="text-xl font-raleway font-medium">{process.env.TEST}</span>
         </div>
         <div className="fixed bottom-4 rigth-4"></div>
      </>
   )
}

export default function () {
   return (<>
      <Home/>
      <About/>
      <Proj/>
      <Contact/>
   </>)
}
