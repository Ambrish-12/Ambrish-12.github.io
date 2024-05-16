import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faBook } from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {
FacebookFilled,TwitterSquareFilled,GithubFilled
} from '@ant-design/icons';
function App() {
  const [menu, setmenu] = useState(false)

  return (
    <>
    {/* Home */}

      <div id='home' className='bg-gradient-to-t from-indigo-300 h-[50vh]  relative overflow-hidden lg:h-screen '>

        <nav className='w-full z-10 fixed top-0 bg-white'>
          <div className='container mx-auto py-5 flex justify-between items-center'>
            <div>
              <span className='text-2xl font-bold text-indigo-900'>Ambrish.</span>
            </div>

            <ul className='hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase'>
              <li className='hover:text-gray-500'>
                <a href='#home'>Home</a>
              </li>

              <li className='hover:text-gray-500'>
                <a href='#Aboutme'>About Me</a>
              </li>

              <li className='hover:text-gray-500'>
                <a href='#services'>Services</a>
              </li>

              {/* <li className='hover:text-gray-500'>
                <a href=''>Works</a>
              </li> */}

              <li className='hover:text-gray-500'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>

            <div className='hidden md:block cursor-pointer' >
              <FontAwesomeIcon icon={faMoon} size={'2x'} style={{ color: "#FFD43B" }} />
            </div>

            <div className={`${menu && 'absolute right-6'} md:hidden z-10 cursor-pointer `}><FontAwesomeIcon className={`${menu ? 'text-white' : 'text-black'}`} size={'2x'} onClick={() => setmenu(!menu)} icon={faBars} /></div>

            <ul className={`${!menu && 'hidden'} transition duration-700 ease-in md:hidden absolute top-0 left-0 bg-blue-900 space-y-10  text-center text-white w-full py-5 rounded-b-2xl`}>
              <li className=''>
                <a href='#home'>Home</a>
              </li>

              <li className=''>
                <a href='#Aboutme'>About Me</a>
              </li>

              <li className=''>
                <a href='#services'>Services</a>
              </li>

              <li className=''>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <img className='absolute bottom-0 right-0  h-5/6 object-cover lg:left-0 mx-auto ' src='./ambrish.png' />

        <div className='hidden -bottom-[250px] mx-auto left-0 right-0 -z-10 lg:block absolute w-big h-big rounded-full bg-indigo-900'>

        </div>

        <div className='absolute top-1/3 left-5 text-4xl sm:left-10 sm:text-4xl md:left-1/8  md:text-6xl lg:left-5 xl:left-45 xl:text-8xl xl:font-bold'>
          <span className='text-gray-600'>Freelance</span>
          <p id='text' className='text-red-500'>Developer</p>
        </div>
        <div className='hidden lg:flex flex-col absolute top-12 shadow-lg bottom-0 m-auto right-12 gap-5 rounded-md bg-white p-6 h-fit w-1/3'>
          <h1 className='text-4xl text-indigo-900 font-bold'>Hi I'm Ambrish</h1>
          <p class='text2' className='text-gray-400'>I have experience on front end developer over 1 year Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis alias laborum ratione soluta praesentium iste repudiandae voluptate veniam sed non dolorum at magnam iusto, a deleniti eum modi animi est!</p>
          <a className='bg-indigo-600 text-white text-xl p-3 w-fit rounded-md px-4 font-semibold' href='#contact'>Hire Me</a>
        </div>
      </div>

      {/* about */}

    <div id='Aboutme' className='px-10'> 
        <div className='container py-40  mx-auto flex flex-col-reverse md:flex-row items-center gap-20'>

           <div className='relative'>
              <img src='./dotted.png' className='h-1/4 absolute top-0 left-0 -z-10 
              ' alt='image'/>
              <div className='h-full overflow-hidden rounded-full '>
                 <img src='./ambrish-pink.jpg'/>
              </div>
           </div>
           
           <div className='my-auto flex flex-col gap-3'>
              <h1 className='text-indigo-600 font-bold'>ABOUT ME</h1>
              <h1 className='text-3xl font-medium'>Better Design</h1>
              <h1 className='text-3xl font-medium'>Better Experience</h1>
              <p className='text-gray-400'>I degin and build digital products.I'm also multi-disciplinary maker with over 10 years of experiences in wide range of design disciplines</p>
             
              <h2 className='font-medium'>HTML</h2>
              <div className='h-1.5 w-full bg-gray-200 rounded-sm'>
                <div className='h-1.5 w-full bg-indigo-600 rounded-sm'>
                </div>
              </div>

              <h2 className='font-medium'>CSS /Tailwind CSS </h2>
              <div className='h-1.5 w-full bg-gray-200 rounded-sm'>
                <div className='h-1.5 w-[70%] bg-indigo-600 rounded-sm'>
                </div>
              </div>

              <h2 className='font-medium'>JavaScript</h2>
              <div className='h-1.5 w-full bg-gray-200 rounded-sm'>
                <div className='h-1.5 w-[80%] bg-indigo-600 rounded-sm'>
                </div>
              </div>

              <h2 className='font-medium'>React</h2>
              <div className='h-1.5 w-full bg-gray-200 rounded-sm'>
                <div className='h-1.5 w-3/4 bg-indigo-600 rounded-sm'>
                </div>
              </div>
           </div>
         </div>
    </div>

<div id='services' className=''>
  <div className='container mx-auto flex flex-col gap-20'>

     <div className='flex flex-col items-center'>
        <h1 className='text-indigo-600 font-bold'>Services</h1>
        <h1 className='text-3xl'>What do i offer</h1>
        <p className='text-center w-1/2'> My approach to website design is to create a website that strengthens your companys brand while ensuring ease of use and simplicity for your audience</p>
     </div>


     <div className='flex sm:p-0 flex-wrap md:p-5'>

       <div className='w-full md:w-4/12 shadow-xl  rounded-lg p-5 my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>
       
       <div className='w-full md:w-4/12 shadow-xl  rounded-lg p-5 md:my-3 my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>

       <div className='w-full md:w-4/12  md:my-3  shadow-xl rounded-lg p-5 my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>

       <div className='w-full md:w-4/12 md:my-3 shadow-xl rounded-lg p-5 my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>

       <div className='w-full md:w-4/12 md:my-3   shadow-xl rounded-lg p-5 my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>

       <div className='w-full md:w-4/12 md:my-3   shadow-xl rounded-lg p-5  my-3 flex flex-col gap-3' >
          <img className='w-[10%]' src='./ux.png'/>
          <h1 className='font-medium text-lg'>Ux/Ui Design</h1>
          <p className='text-gray-400'> I specializing in creating interactive websites forr individuals and small buisnesses</p>
          <a className='text-indigo-600 font-semibold text-sm' href='#'>Read More</a>
       </div>
     </div>
  </div>
</div>

<div id='contact' className='py-20'>
   <div className='container mx-auto flex flex-col'>
      
     <div className='flex flex-col gap-3 items-center'>
         <h1 className='font-bold text-indigo-600'>
          Contact 
         </h1>
         <h1 className='text-3xl'>Have a Question ?</h1>
         <p className='w-1/2 text-center text-gray-400'>
          Do you have an idea Let's discuss it and see what we can do together.
         </p>
     </div>

<form className='flex flex-col gap-5 items-center mt-5 p-8'>
  <input className='p-2 w-full md:w-1/2 ring-1 rounded-sm' type='text' placeholder='name'/>
  <input className='p-2 w-full md:w-1/2 ring-1 rounded-sm' type='email' placeholder='email'/>
 <textarea className='p-2 w-full md:w-1/2 ring-1 rounded-sm'cols='30' rows='10' placeholder='message' />
 <button className='w-1/2 py-2 rounded-md cursor-pointermd:w-1/2  bg-indigo-600 text-white font-medium'>Submit</button>
</form>
   </div>
</div>

    <div className='w-full bg-gray-800'>
          <div className='container mx-auto py-5 flex justify-between items-center'>
            <div>
              <span className='text-2xl font-bold text-white'>Ambrish.</span>
            </div>
 
            <span className='hidden md:block text-white font-medium text-xl'> Design by Ambrish 2022</span>  
          <div className='flex gap-3'>
          <FacebookFilled style={{color:'white'}}/>  
            <TwitterSquareFilled style={{color:'white'}}/>
            <GithubFilled style={{color:'white'}}/>
            </div>  
 
          </div>
      </div>
    </>
  )
}

export default App
