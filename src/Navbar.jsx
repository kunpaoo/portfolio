import './Navbar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return ( <>
    <div className="bg-blue-dot fixed text-blue-white sticky-nav w-full title-outline-nav text-2xl flex flex-row p-10 gap-10 justify-between lowercase font-bold">
        <div className="justify-self-start text-3xl"><AnchorLink href="#home">Anya Kuan</AnchorLink></div>
        <div className='flex flex-row gap-10'>
        <AnchorLink href="#home">home.</AnchorLink>
        <AnchorLink href="#projects">projects.</AnchorLink>
        <AnchorLink href="#projects">contact.</AnchorLink>
        </div>
    </div>
    </> );
}
 
export default Navbar;