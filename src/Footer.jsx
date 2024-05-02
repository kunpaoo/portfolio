import './App.css'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import AOS from 'aos';

const Footer = () => {
    return ( <>
    <div id="contact" className="w-full bg-blue-white h-96 flex flex-col justify-center place-items-center gap-5 tracking-tight p-10">
        <div data-aos="fade-up" className="text-transparent font-black text-6xl">Contact me</div>
        <div data-aos="fade-up" className="flex flex-row gap-10">
            <div className="flex flex-row p-5 gap-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-dark ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>
            <div className='grid grid-cols-1'>
            <span className='text-lg font-bold'>Email Address</span>
            anyakuan.dev@gmail.com
            </div>
            </div>
            <div className="flex flex-row p-5 gap-2 justify-center items-center">
            <img src={linkedin} alt="linked in" className='h-16 w-16 rounded-md' />
            <a href="https://www.linkedin.com/in/anya-kuan-b0a357271/"><div className='ps-2 grid grid-cols-1'>
            <span className='text-lg font-bold'>Linked In</span>
            <span className='normal-case'>Anya Kuan</span>
            </div></a>
            </div>
        </div>
    </div>
    <div className="w-full text-white font-semibold text-center p-5 normal-case">Copyright © 2024 by Anya Kuan</div>
    </> );
}
 
export default Footer;