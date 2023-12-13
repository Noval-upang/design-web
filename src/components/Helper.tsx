export function Title(props: {context:string, class:string}) {
   return <p className={"w-fit border-b-2 border-black font-bold tracking-wide " + props.class}>{props.context}</p>
}

export function Card (props: {img:string,title:string, desc: string}) {
   return (
      <div className="border rounded-md bg-white">
         <img src={props.img} alt="Project screenshot" className="w-full h-30 object-cover" />
         <div className="p-2">
            <h1 className="font-robotoSlab text-lg font-bold tracking-wider">{props.title}</h1>
            <p className="h-[10.5vh] overflow-auto no-scrollbar text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi animi libero magni assumenda numquam eum, nemo architecto repellendus. Temporibus rerum ad cumque nulla sapiente. Officia aperiam deleniti deserunt illum enim!</p>
         </div>
      </div>
   )
}