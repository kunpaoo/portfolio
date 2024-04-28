const Tag = (props) => {
    return ( <>
    <div className="w-auto px-5 py-1 rounded-full bg-blue-dark/85 font-bold tracking-tight text-blue-white">
        {props.title}
    </div>
    </> );
}
 
export default Tag;