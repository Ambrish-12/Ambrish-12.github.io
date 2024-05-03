import React from "react";
import { Space } from "antd";
import { LinkedinOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons';
export default function Home() {
  return (
    <div className="bg-black flex flex-col justify-around items-center h-[100%] font-sans ">
      <div className="w-[80%]  h-screen flex flex-col gap-6">

        <header className='  mt-5 h-20 flex justify-between items-center'>

          <h1 className="text-4xl text-white">ambrish</h1>
          <Space size={'middle'} align={'end'}>
            <LinkedinOutlined className="text-3xl text-white" />
            <GithubOutlined className="text-3xl text-white" />
            <FacebookOutlined className="text-3xl text-white" />
          </Space>

        </header>

        <main className='flex  overflow-hidden items-center mb-12 '>

          <div className='px-8  text-white flex flex-grow-0 flex-col gap-8'>

            <h1 className='text-8xl'>
              Nice to meet you!      
              I'm
              <span className="underline underline-offset-8 decoration-4 ml-10 decoration-emerald-500">A.Ambrish</span>
            </h1>

            <p className='text-lg font-mono max-w-[65%]'>
              A FrontEnd focused web developer building the front end of websites and web application that leads to the sucess of overall product
            </p>

            <h3 className="text-lg underline underline-offset-8 decoration-2 decoration-emerald-500">CONTACT ME</h3>

          </div>
          <img src='.\ambrish1-Photoroom.png ' className="w-[39%] h-[100%] -z-0 bg-slate-100 h-[105%]" alt='image' />
        </main>

      </div>

      <div className="w-[80%] flex border-t justify-center space-y-10 h-screen  flex-col gap-6">


        <main className='  h-[50%] grid  grid-cols-3 gap-4 mb-20 '>

          <div className="text-white flex flex-col justify-around  row-span-12"><h1 className="text-5xl">Html</h1> <p className="text-lg text-slate-200">4 Years Experience</p></div>
          <div className="text-white flex flex-col justify-around  row-span-12 "><h1 className="text-5xl">Css</h1><p className="text-lg text-slate-200">4 Years Experience</p></div>
          <div className="text-white flex flex-col justify-around row-span-12"><h1 className="text-5xl">Javascript</h1><p className="text-lg text-slate-200">4 Years Experience</p></div>
          <div className="text-white flex flex-col justify-around  row-span-12"><h1 className="text-5xl">React</h1><p className="text-lg text-slate-200">4 Years Experience</p></div>
          <div className="text-white  flex flex-col justify-around row-span-12"><h1 className="text-5xl">Accessibility</h1><p className="text-lg text-slate-200">4 Years Experience</p></div>

        </main>

      </div>

      <div className="w-[100%]  bg-cust-gray/10 h-screen flex justify-center flex-col gap-6">
        <div className="w-[80%] h-screen flex justify-evenly  flex-col  mx-auto">

          <div className=' border mt-5 h-[70%] grid grid-cols-2 '>

            <div className="max-w-[30%] h-full border ">
              <h1 className="text-7xl text-white">CONTACT</h1>
              <p className="text-cust-gray">I would live to hear your project and how i could help. Please fill in the form i will get back to you as soon as possible.</p>
            </div>

            <div className="">

            </div>

          </div>

          <div className='mt-5 h-20 flex justify-between items-center'>

            <h1 className="text-4xl text-white">ambrish</h1>
            <Space size={'middle'} align={'end'}>
              <LinkedinOutlined className="text-3xl text-white" />
              <GithubOutlined className="text-3xl text-white" />
              <FacebookOutlined className="text-3xl text-white" />
            </Space>

          </div>

        </div>
      </div>
      
    </div>
  )

}