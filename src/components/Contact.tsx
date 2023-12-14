import { Title } from "./Helper";

export function Contact () {
   return (
      <div className="p-4 bg-black text-white">
         <Title class="border-white" context="Contact" />
         <div className="flex flex-col mt-2">
            <a href="" className="my-1 border-b w-fit">Company Twitter</a>
            <a href="" className="my-1 border-b w-fit">Company Facebook</a>
         </div>
      </div>
   )
}