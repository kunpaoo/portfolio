
import './App.css'

function App() {

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">



        {/* first screen */}
      <div className='h-screen w-full flex flex-col items-center justify-center '>

        <div className='max-w-screen overflow-x-clip w-full flex flex-col items-center'>
        <div className="title text-10xl font-black tracking-tight w-2/4 text-start self-start slide-left">
        HELLO!
        </div>
        <div className="title-outline text-9xl font-black tracking-tight shadow-sm w-2/4 text-end self-end slide-right">
        HELLO!
        </div>
      </div>

      </div>


      <div className='h-screen flex flex-col items-center'>
        <div className="title w-30 m-auto text-6xl font-black tracking-tight">
        HELLO
        </div>
        <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div>
      </div>
      </div>
    </>
  )
}

export default App