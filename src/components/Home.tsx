import axios from "axios";
import { useEffect, useState } from "react";

const API = axios.create({baseURL:"be-design-production.up.railway.app"})

function submit(props:any[], url: string) {
   return API
      .post(
         url, 
         {data : JSON.stringify(props)}, 
         {
            headers:
               {
                  "Content-Type": "application/json",
                  hasAccept:true
               }
         }) 
}



export function Home () {
   const 
      [state, setState] = useState([] as any[]),
      [name, setName] = useState("")
   
   useEffect(()=>{
      console.log(state)
   })

   return (<>
      <input style={{border:"1px solid"}} type="text" onChange={(e)=>setName(e.target.value)} value={name} onKeyDown={(e)=>{
         if (e.key === "Enter") {
            setState(prev=>[...prev, name])
            setName("")
         }
      }}/>
      <button style={{border:"1px solid"}} onClick={()=>
         submit(state, "/add")
            .then((i)=>{
               console.log(i.data)
               const data= Object.entries(i.data).join(" ")
               document.getElementById("res")!.innerHTML = data
            })
      }>submit</button>

      <button style={{border:"1px solid"}} onClick={()=>
         API
            .get("/test")
            .then(res=>{
               console.log(res.data)
               document.getElementById("res")!.innerHTML = res.data
            }).catch((err)=>console.log("err"))
      }>test</button>
      <div id="res"></div>
   </>)
}
