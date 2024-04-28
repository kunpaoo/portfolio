import './Navbar.css'

const Navbar = () => {
    return ( <>
    <div className="bg-none fixed w-full title-outline-nav text-3xl flex flex-row p-10 gap-10 justify-between lowercase font-bold">
        <div className="justify-self-start">Anya Kuan</div>
        <div className='flex flex-row gap-10'>
        <div className=''>home.</div>
        <div>projects.</div>
        <div>contact.</div>
        </div>
    </div>
    </> );
}
 
export default Navbar;