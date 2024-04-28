
import './App.css'
import Navbar from './Navbar'
import js_logo from './assets/js.png'
import py_logo from './assets/python.png'
import react_logo from './assets/react.svg'
import flask_logo from './assets/flask.png'
import mysql_logo from './assets/mysql.png'
import java_logo from './assets/java-logo.png'
import html_logo from './assets/html.png'
import css_logo from './assets/css.png'
import tailwind_logo from './assets/tailwind.png'
import bootstrap_logo from './assets/bootstrap.png'
import vite_logo from './assets/vite.svg'
import vitest_logo from './assets/vitest.png'
import github_logo from './assets/github.png'
import flowbite_logo from './assets/flowbite.png'
import vscode_logo from './assets/vscode.png'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card'
import sample from './assets/project/sample.png'


function App() {
  
  useEffect(()=>{
      AOS.init({duration:1500})
    },[]);


  return (
    <>
      <Navbar/>
      <div>
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
        <div data-aos="fade-up" className="bg-none w-7/12 relative h-auto text-center tracking-tight leading-tight font-extrabold slide-in">
        <span className='text-about text-7xl'>anya kuan</span>
        {/* <hr className='border border-solid my-5'></hr> */}
        <p className='text-lg mt-4 text-[#002733] text-desc lowercase font-bold tracking-wide'>
          3rd Year Computer Science Student. Web Developer.
        </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" data-aos="fade" className="w-10 bouncy h-10 mt-20 absolute bottom-20 text-blue-white font-bold ">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5" />
        </svg>
        

{/* 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> */}




      </div>

      <div className='h-auto bg-blue-white/90 w-full px-10 py-10 flex flex-row justify-between items-between overflow-x-clip'>
        <div data-aos="fade-right" className="text-transparent text-8xl font-black tracking-tight self-start">
        techstack.
        </div>
        <div data-aos="fade-left" className=' ms-10 w-2/4 grid grid-cols-5 gap-8'>
            <img src={js_logo} alt="javascript" className='w-20 h-20 rounded-md' />
            <img src={py_logo} alt="python" className='w-20 h-20 rounded-md' />
            <img src={react_logo} alt="react" className='w-20 h-20 rounded-md' />
            <img src={flask_logo} alt="flask" className='w-auto h-20' />
            <img src={mysql_logo} alt="mysql" className='w-20 h-20 rounded-md' />
            <img src={html_logo} alt="html" className='w-auto h-20 rounded-md' />
            <img src={css_logo} alt="css" className='w-auto h-20 rounded-md' />
            <img src={tailwind_logo} alt="tailwind" className='w-20 h-auto self-center rounded-md' />
            <img src={flowbite_logo} alt="flowbite" className='w-20 h-20 rounded-md' />
            <img src={bootstrap_logo} alt="bootstrap" className='w-auto h-20 rounded-md' />
            <img src={vite_logo} alt="vite" className='w-auto h-20 rounded-md' />
            <img src={vitest_logo} alt="vitest" className='w-auto h-20 rounded-md' />
            <img src={java_logo} alt="java" className='w-20 h-20 rounded-md' />
            <img src={github_logo} alt="github" className='w-20 h-20 rounded-md' />
            <img src={vscode_logo} alt="visual studio code" className='w-20 h-20 rounded-md' />
        </div>
        {/* <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div> */}
      </div>

      <div className='h-auto gap-16 w-full px-10 py-36 flex flex-col justify-between items-between overflow-x-clip'>
        <div data-aos="fade-left" className="text-about text-8xl font-black tracking-tight self-end me-10">
        projects.
        </div>
        <div data-aos="fade-right" className="self-start w-full h-auto pb-10">
        <div className='w-full grid grid-flow-col flex-nowrap overflow-x-scroll scroll-style pb-5 gap-5'>
          <Card title="TEST" image={sample} alt="sample"/>
          <Card title="TEST" image={sample} alt="sample"/>
          <Card title="TEST" image={sample} alt="sample"/>
          <Card title="TEST" image={sample} alt="sample"/>
          <Card title="TEST" image={sample} alt="sample"/>
          <Card title="TEST" image={sample} alt="sample"/>
        </div>
        </div>
        {/* <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div> */}
      </div>
      </div>
      </div>
    </>
  )
}

export default App