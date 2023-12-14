import { useEffect } from "react"

export default function () {
   const link = "border-b border-black hover:opacity-75 m-2 text-md font-medium"
   useEffect(()=>{
      const menu = document.getElementById("menu")
      const content = document.getElementById("content")
      document.getElementById("open")!.addEventListener("click", ()=>{
         menu!.style.visibility = "visible"
         content!.style!.right = "0"
      })
      document.getElementById("close")!.addEventListener("click", ()=>{
         content!.style!.right = "-75%"
         setTimeout(()=> menu!.style.visibility = "hidden", 200)
      })
   })
   return (
      <>
         <nav className="fixed bg-white w-full flex flex-row justify-between items-center">
            <img src="" alt="logo" className="m-2 h-10"/>
            <span className="material-symbols-outlined mr-3 sm:hidden" id="open">menu</span>
            {/* Menu */}
            <div 
               className="
                  invisible top-0 absolute flex justify-end w-screen h-screen bg-black bg-opacity-75 
                  sm:[position:unset] sm:h-fit sm:bg-transparent sm:visible
                  "
               id="menu">
               {/* Content */}
               <div 
                  className="
                     absolute flex flex-col w-3/5 h-full bg-white -right-[75%] transition-all duration-700
                     sm:flex-row sm:w-fit sm:static
                     "
                  id="content"
                  >
                  <div className="sm:hidden text-right">
                     <span className="material-symbols-outlined m-2" id="close">close</span>
                  </div>
                  <a href="/" className={link}>Home</a>
                  <a href="/about" className={link}>About us</a>
                  <a href="/proj" className={link}>Our Project</a>
                  <a href="/contact" className={link}>Contact</a>
               </div>
            </div>
         </nav>
      </>
   )
}
