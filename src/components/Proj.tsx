import { Card, Title } from "./Helper";

export default function () {
   return <div className="bg-[#3c933c] p-4" id="proj">
      <Title class="border-white text-white" context="Project"/>
      <div className="grid grid-cols-2 gap-4 mt-4" id="proj">
         {[1,2,3,4,5,6,7].map(i=>   
            <Card
               desc={String(i)}
               img="poster.png"
               title="Classroom rip off"
            />
         )}
      </div>
   </div>
}