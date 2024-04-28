import Tag from "./Tag";

const Card = (props) => {
    return ( <>
    <div className="flex flex-col w-96 h-96 pb-4 gap-4 bg-blue-white rounded-lg overflow-clip">
        <div className="overflow-clip h-1/2 w-full">
        <img src={props.image} alt={props.alt} className="h-auto w-full" />
        </div>
        <div className="flex flex-col h-1/2 justify-between px-5 font-extrabold text-2xl leading-tight tracking-tight">
        <div><span className="normal-case">{props.title}</span>
        <div className="mt-3 flex flex-row flex-wrap gap-1 text-sm">
            {props.tags.map((tag)=>{
                return <Tag title={tag}/>
            })}
        </div>
        </div>

        <a href={props.link}><button className="border border-blue-dark text-blue-dark rounded-full mt-4 px-4 py-1 w-full text-sm hover:bg-blue-dark hover:text-blue-white">View on {props.platform}</button></a>
        
        </div>
        

    </div>
    </> );
}
 
export default Card;