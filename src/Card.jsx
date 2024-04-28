const Card = (props) => {
    return ( <>
    <div className="flex flex-col w-96 h-96 gap-4 bg-blue-white rounded-lg overflow-clip">
        <div className="overflow-clip h-2/4 w-full">
        <img src={props.image} alt={props.alt} className="h-full w-full" />
        </div>
        <div className="px-5 font-bold text-2xl">
        {props.title}
        </div>
        

    </div>
    </> );
}
 
export default Card;