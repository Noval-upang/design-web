
import {About} from "./About";
import {Contact} from "./Contact";
import {Nav} from "./Nav";
import {Proj} from "./Proj";


export function Home () {
   return (<>
      <>
         <Nav/>
         <div className="flex items-center justify-center h-[15vh]">
            <span className="text-xl font-raleway font-medium">{process.env.REACT_APP_TEST}</span>
         </div>
         <div className="fixed bottom-4 rigth-4"></div>
      </>
      <About/>
      <Proj/>
      <Contact/>
   </>)
}
