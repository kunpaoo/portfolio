
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
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
import figma_logo from './assets/figma.png'
import ps_logo from './assets/photoshop.png'
import appsheet_logo from './assets/appsheet.png'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card'
import sample from './assets/project/sample.png'
import job_order from './assets/project/job-order.png'
import catalogue from './assets/project/cat-alogue.png'
import catalogue2 from './assets/project/cat-alogue-2.png'
import addubot from './assets/project/addubot.png'
import rizaldle from './assets/project/rizaldle.png'
import sisform from './assets/project/sis-form.png'
import sis from './assets/project/sis.png'
import lostandfound from './assets/project/lostandfound.png'


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
      <div id="home" className='h-screen w-full flex flex-col gap-5 items-center justify-center px-20'>
        
        {/* <div className='max-w-screen overflow-x-clip w-full flex flex-col items-center'>
        <div className="title-outline text-10xl font-black tracking-tight w-auto text-start self-start mb-4 slide-left">
        HELLO!
        </div>
        <div className="title-outline text-10xl font-black tracking-tight shadow-sm w-2/4 text-end self-end slide-right">
        HELLO!
        </div>
        </div> */}
        <div data-aos="fade-up" className="bg-none xl:w-7/12 md:w-full sm:w-full relative h-auto text-center tracking-tight leading-tight font-extrabold slide-in">
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

      <div className='h-auto bg-blue-white/90 w-full px-10 py-16 xl:gap-8 lg:gap-16 md:gap-16 sm:gap-16 flex xl:flex-row md:flex-col sm:flex-col xl:justify-between sm:justify-center xl:items-between sm:items-center overflow-x-clip'>
        <div data-aos="fade-right" className="text-transparent text-8xl font-black tracking-tight self-start">
        techstack.
        </div>
        <div data-aos="fade-left" className=' xl:ms-10 lg:ms-0 xl:w-2/4 lg:w-full md:w-full sm:w-full grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-10 xl:justify-items-start lg:justify-items-center md:justify-items-center sm:justify-items-center '>
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
            <img src={figma_logo} alt="figma" className='w-auto h-20 self-center rounded-md' />
            <img src={ps_logo} alt="photoshop" className='w-20 h-20 rounded-md' />
            <img src={appsheet_logo} alt="appsheet" className='w-20 h-20 rounded-md' />
        </div>
        {/* <div className="bg-blue-green w-2/4 h-auto p-10 outline outline-red-one outline-offset-2 text-sm shadow-xl text-blue-dark tracking-tight leading-tight font-extrabold">
          Consequat dolore dolor exercitation in tempor aute pariatur minim tempor excepteur. Culpa et laborum voluptate ut. Dolor sunt est nostrud adipisicing exercitation in adipisicing sunt anim velit ad aliquip magna. Et esse culpa minim tempor velit est et consectetur amet deserunt.
        </div> */}
      </div>

      <div id="projects" className='h-auto gap-16 w-full px-10 pt-36 pb-20 flex flex-col justify-between items-between overflow-x-clip'>
        <div data-aos="fade-left" className="text-about text-8xl font-black tracking-tight self-end me-10">
        projects.
        </div>

        <div data-aos="fade-right" className="self-start w-full h-auto">
        <div className="flex flex-row w-full items-center gap-10 mb-8">
          <span className="text-about text-5xl font-black tracking-tight">applications.</span>
          <hr className="border border-blue-white w-full"/>
        </div> 
        <div className='w-full h-auto grid grid-flow-col flex-nowrap overflow-x-scroll scroll-style pb-8 gap-5'>
          <Card platform="Github" title="Job Order Management System for Computer Repairs" image={job_order} alt="preview" tags={["reactjs","python flask","bootstrap","mysql"]} link="https://github.com/kunpaoo/jb-react-flask"/>
          <Card platform="Github" title="Rizaldle: Filipino Wordle Game" image={rizaldle} alt="preview" tags={["html","css","javascript","tailwindcss"]} link="https://github.com/kunpaoo/wordle"/>
          <Card platform="Github" title="Cat-alogue: Cat Adoption" image={catalogue} alt="preview" tags={["reactjs","tailwindcss","flowbite","vite","vitest"]} link="https://github.com/avrlalnex/cat-alogue"/>
          <Card platform="Appsheet" title="Lost-and-Found-it" image={lostandfound} alt="preview" tags={["appsheet"]} link="https://www.appsheet.com/start/44222b13-2f21-49ce-9502-a0161af5eb56"/>
          <Card platform="Github" title="Student Information Form" image={sisform} alt="preview" tags={["java"]} link="https://github.com/kunpaoo/finalsOOP"/>
          </div>
        </div>

        <div data-aos="fade-right" className="self-start w-full h-auto">
        <div className="flex flex-row w-full items-center gap-10 mb-8">
          <span className="text-about text-5xl font-black tracking-tight">prototypes.</span>
          <hr className="border border-blue-white w-full"/>
        </div> 
        <div className='w-full h-auto grid grid-flow-col justify-start flex-nowrap overflow-x-scroll scroll-style pb-8 gap-5'>
          <Card platform="Figma" title="Cat-alogue: Cat Adoption" image={catalogue2} alt="preview" tags={["figma"]} link="https://www.figma.com/proto/sj6Zp7xLhBuByelZg80h5D/Cat-alogue?node-id=29-572&scaling=scale-down&mode=design&t=IAujYEgIFU7EvAW7-1"/>
          <Card platform="Figma" title="AdDUBot" image={addubot} alt="preview" tags={["figma"]} link="https://www.figma.com/proto/kIZmZWxQnNmCpq0aXqjmwP/AdDUBot?type=design&node-id=283-1754&t=Xhp4ljq3ITNRc2Y9-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=375%3A2497&mode=design"/>
          <Card platform="Figma" title="Student Information System" image={sis} alt="preview" tags={["figma"]} link="https://www.figma.com/proto/L2GQ46tzvwseZdAe8ujc93/SIS?node-id=1-39&starting-point-node-id=1%3A3&scaling=scale-down&mode=design&t=01dEqwZUw8AmqbJ1-1"/>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
      </div>
    </>
  )
}

export default App