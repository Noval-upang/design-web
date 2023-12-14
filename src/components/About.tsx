import { Title } from "./Helper";

export function About () {
   return (
      <div className="grid items-center bg-[#f1ea05]" id="about">
         <div className="flex">
            <img src="poster.png" alt="My dwadaadad" className="w-1/3"/>
            <div className="p-2">
               <Title class="" context="About us"/>
               <p className="text-sm mt-2">
                  We are <b>Company</b><br />
                  We make web for you, we get money from you <br />
                  You <b>Request</b>, we <b>Make</b><br />
                  Dont worry for one simple web you just need to pay <b>$2 Dolar</b><br />
               </p>
            </div>
         </div>
      </div>
   )
}