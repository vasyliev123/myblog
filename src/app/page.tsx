"use client";
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(
) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: 'ease',
      delay: 100,
      offset: 50,
      mirror: false,
      anchorPlacement: 'top-bottom',
    

    });
  }, []);


  return (
    <>
    

      {/* <div id="static-bg" className="h-screen w-screen bg-cover  bg-[url('/images/sf1.gif')]   absolute"></div> */}
      <div className="h-screen bg-cover flex flex-row items-center justify-between ">
        <div className="flex flex-col items-center m-auto text-center opacity-1" data-aos="fade-up">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-8xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-purple-400">Dmytro Vasyliev</span></h1>
          <p className="text-lg font-bold text-gray-100 md:text-xl lg:text-3xl dark:text-gray-200">Software developer, Soloprenuer, Fantasy enthusiast</p>
          {/* contact me button */}
          <Link href="#contact">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-md p-2 pl-5 pr-5 mt-5">Contact Me</button>
          </Link>
        </div>
      </div>



      {/* about section */}
     
      
      <div id="about" className='h-fit flex flex-col bg-cool-black sm:pl-10 sm:pr-10'>
        <div className='grid grid-cols-1 gap-32 justify-center mt-28 mb-20'>
           <div className='flex flex-col md:flex-row text-center md:text-start justify-between gap-4 sm:gap-14 sm:m-8 xl:ml-52 xl:mr-52'>
            <div className='flex-1 m-auto' data-aos="fade-right">
              <p className="font-extrabold text-center text-gray-100 md:text-xl lg:text-3xl dark:text-gray-200" >
                <span className="text-7xl text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-purple-400">Who</span>
              </p>
            </div>
            <div className='' data-aos="fade-up">
              <p className="text-xl font-bold text-gray-100 sm:text-3xl lg:text-4xl dark:text-gray-200 tracking-tight leading-relaxed p-2">
                Passionate software developer and solopreneur, crafting innovative solutions to real-world problems.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-center md:text-start  justify-between gap-8 sm:gap-14 sm:m-8 xl:ml-52 xl:mr-52' >
            <div className='flex-1 m-auto' data-aos="fade-right">
              <p className="font-extrabold text-center text-gray-100 md:text-xl lg:text-3xl dark:text-gray-200  ">
              <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-purple-400">What</span>
              </p>
            </div>
            <div className='' data-aos="fade-up">
              <p className="text-xl font-bold text-gray-100 sm:text-3xl lg:text-4xl dark:text-gray-200 tracking-tight leading-relaxed p-2">
              Software automation, Infrustracture, Web devepment, Android engenier
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-center md:text-start  justify-between gap-8 sm:gap-14sm:m-8 xl:ml-52 xl:mr-52'>
            <div className='flex-1 m-auto' data-aos="fade-right" data-aos-duration="1500">
              <p className="font-extrabold text-center text-gray-100 md:text-xl lg:text-3xl dark:text-gray-200  ">
              <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-purple-400">How</span>
              </p>
            </div>
            <div className='' data-aos="fade-up" data-aos-duration="1500">
              <p className="text-xl font-bold text-gray-100 sm:text-3xl lg:text-4xl dark:text-gray-200 tracking-tight leading-relaxed p-2">
              JS/TS, Python, HTML5, Tailwind CSS, Next.js,
              Flask, RESTful API, SQL, PostgreSQL, MariaDB,
              Redis, Docker, gRPC, Git, GitHub, Jira, Jenkins,
              CI/CD, AWS, OCI, Firebase, Nginx, FastAPI, Agile, 
              Scrum, Unity3D, Blender, Selenium, Telegram
              </p>
            </div>
          </div>
        </div>  
      </div>
        {/* project overview*/}
      <div id='projects' className=' flex flex-col bg-gradient-to-b from-cool-black-dark  to-cool-black-light relative items-center h-fit md:h-screen p-2' >
      {/* First Image */}
        <Image
          src='/images/pnga.png'
          width={2600}
          height={1024}
          alt='Background'
          className='  object-none   md:object-cover inset-y-0 top-0  h-full absolute transform rotate-180 md:rotate-0'
        />

        {/* Second Image */}
        <Image
          src='/images/pnga.png'
          width={2600}
          height={1024}
          alt='Background'
          className='md:hidden  h-screen bottom-0 object-none transform   absolute'
        />
      
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-20 mb-20'>
       
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className='h-80 w-fit md:w-72 bg-cool-black-dark rounded-xl p-5 backdrop-blur-lg bg-opacity-60 transition-all border border-gray-800'>
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
        </div>
        
      </div>

      {/* contact section */}
      

    <div id='contact' className='h-fit flex flex-col bg-cool-black pl-10 pr-10 lg:pl-64 lg:pr-64 xl:pr-80 xl:pl-80 pb-20 pt-10'>
      <h1 className='self-center font-bold text-xl sm:text-2xl'>Contact me via my Socials </h1>
      <div className='flex flex-row gap-5 mt-10 self-center'>
        {/* <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
            <span className="sr-only">Facebook page</span>
          </a> */}
        <a href="https://github.com/vasyliev123" className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">GitHub account</span>
        </a>
          <a href="https://www.linkedin.com/in/dmytro-vasyliev-81934b23a/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="sr-only">LinkedIn account</span>
          </a>
        <a href="https://discordapp.com/users/compl3x0948" className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
            <span className="sr-only">Discord account</span>
        </a>
        <a href="t.me/@musclepilled83" className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>              </svg>
            <span className="sr-only">Telegram account</span>
        </a>
        {/* <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
          </svg>
            <span className="sr-only">Twitter page</span>
        </a> */}

      </div>
      <p className='self-center font-bold text-lg sm:text-xl mt-10'>Or send me a message</p>
      <div className="mb-6 mt-5">
        <label htmlFor="email_addr" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your Email</label>
        <input type="text" id="email_addr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cool-purple focus:border-cool-purple block w-full p-2.5 dark:bg-cool-black-light dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cool-purple dark:focus:border-cool-purple"></input>
      </div>
      <div className="mb-6">
        <label htmlFor="full_name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your Full Name</label>
        <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cool-purple focus:border-cool-purple block w-full p-2.5 dark:bg-cool-black-light dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cool-purple dark:focus:border-cool-purple"></input>
      </div>
      <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your message</label>
      <textarea id="message" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cool-purple focus:border-cool-purple block w-full p-2.5 dark:bg-cool-black-light dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cool-purple dark:focus:border-cool-purple" placeholder="Write your thoughts here..."></textarea>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-md px-5 py-2.5 text-center  mb-2 w-fit h-10 mt-10">Send Message</button>
    </div>


   

    </>
  )
}
