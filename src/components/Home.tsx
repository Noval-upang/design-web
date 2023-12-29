
import axios from "axios";
import { useEffect, useState } from "react";

function submit(props:any[], url: string) {
   return axios
      .create({baseURL:process.env.REACT_APP_API})
      .post(
         url, 
         {data : JSON.stringify(props)}, 
         {headers:{
            setContentType: "application/json"
         }}) 
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
         axios
            .create({baseURL:process.env.REACT_APP_API})
            .get("/test")
            .then(res=>{
               document.getElementById("res")!.innerHTML = res.data.data
            }).catch((err)=>console.log("error"))
      }>test</button>
      <div id="res"></div>
   </>)
}
