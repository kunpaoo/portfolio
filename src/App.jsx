
import './App.css'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className="h-full flex flex-col items-center justify-center lowercase">
      


        {/* first screen */}
      <div className='h-screen w-full flex flex-col gap-5 items-center justify-center px-20'>
        
        {/* <div className='max-w-screen overflow-x-clip w-full flex flex-col items-center'>
        <div className="title-outline text-10xl font-black tracking-tight w-auto text-start self-start mb-4 slide-left">
        HELLO!
        </div>
        <div className="title-outline text-10xl font-black tracking-tight shadow-sm w-2/4 text-end self-end slide-right">
        HELLO!
        </div>
        </div> */}
        <div className="bg-none w-7/12 relative h-auto text-center tracking-tight leading-tight font-extrabold">
        <span className='text-about text-7xl'>anya kuan</span>
        {/* <hr className='border border-solid my-5'></hr> */}
        <p className='text-lg mt-4 text-[#002733] text-desc lowercase font-bold tracking-wide'>
          3rd Year Computer Science Student. Web Developer.
        </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mt-20 absolute bottom-20 text-blue-white font-bold ">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5" />
        </svg>
        

{/* 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> */}




      </div>

      <div className='h-auto bg-blue-white/90 w-full px-10 py-10 border border-black flex flex-row justify-between items-between'>
        <div className="text-transparent text-8xl font-black tracking-tight self-start">
        techstack.
        </div>
        <div className=' border border-black ms-10 w-3/4 h-60'>sample</div>
        {/* <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div> */}
      </div>

      <div className='h-screen w-full px-10 py-40 border border-black flex flex-col justify-between items-between'>
        <div className="text-about text-8xl font-black tracking-tight self-end me-10">
        projects.
        </div>
        <div className=' border border-black self-start w-3/4'>sample</div>
        <div className='h-30 w-fit border border-black'>sample</div>
        {/* <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div> */}
      </div>
      </div>
    </>
  )
}

export default App