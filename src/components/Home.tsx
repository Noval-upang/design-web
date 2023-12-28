
import axios from "axios";
import { useEffect, useState } from "react";

function submit(props:any[]) {
   return axios
      .create({baseURL:process.env.REACT_APP_API})
      .post(
         "/add", 
         {data : props}, 
         {headers:{
            "Content-Type" : "application/json"
         }}) 
}

export function Home () {
   const 
      [state, setState] = useState([] as any[]),
      [name, setName] = useState("")

   return (<>
      <input style={{border:"1px solid"}} type="text" onChange={(e)=>setName(e.target.value)} value={name} onKeyDown={(e)=>{
         if (e.key === "Enter") {
            setState(prev=>[...prev, name])
            setName("")
         }
      }}/>
      <button style={{border:"1px solid"}} onClick={()=>
         submit(state)
            .then((i)=>{
               const data= i.data as any[]
               document.getElementById("res")!.innerHTML = data.join(" ")
            })
      }>submit</button>
      <div id="res"></div>
   </>)
}
