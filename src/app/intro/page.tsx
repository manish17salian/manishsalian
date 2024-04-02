'use client'

import Image from 'next/image'
import { pirateOne_regular } from '../../utilities/font';
import { useEffect } from 'react';
import Button from '@/components/button';
export default function Intro() {
const onClickFunc = ()=>{
    window.open('https://drive.google.com/file/d/1ecQy8uVGJywaMHZwxwM1RxZSxJ68DM0E/view?usp=sharing', '_blank')
}
    return (
        <>
            <style jsx>{`

        .introBody{
            scroll-snap-align: start;
            scroll-snap-stop: always;
        }
      .gridBorder{
        border: 3px solid white;
        border-radius: 20px;
      }
      .borderRight{
        border-right: 3px solid white;
      }

      @media (max-width: 1024px) {
        .borderRight {
            border-right: none; 
            border-bottom: 3px solid white;
        }
      }

    `}</style>
            <main className="grid min-h-screen flex-col items-center p-20 lg:grid-cols-12 introBody max-sm:p-5">
                <div className="grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-12">
                    <p className={`text-6xl lg:col-span-12 ${pirateOne_regular.className} pb-3.5`}>Hi, I’m <span style={{color: '#C086EA'}}>Manish Salian</span>. Nice to meet you.</p>
                    <p className={`text-xl max-lg:text-base lg:col-span-12`}>
                        I&apos;m a tech enthusiast with practical know-how in crafting both Native Apps and Web applications.
                        I enjoy bringing my front-end skills to the table, creating apps that are not just functional but also user-centered and interactive.
                        My goal? To soar as a Software Engineer and team up with talented developers to bring exceptional applications to life!
                        Let&apos;s dive into the world of coding and create something awesome together!
                    </p>
                </div>
                <div className='grid justify-center lg:col-span-12 my-10'>
                    <Button text={'My Resume'} onClickFunc={onClickFunc}/>
                </div>
                <div className="grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-center lg:col-span-12 gridBorder p-5 max-xl:p-3">
                    <div className="lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-2 borderRight">
                        <div className="flex align-center justify-evenly max-lg:my-2">
                            <p className="flex align-center text-2xl font-bold max-lg:xl ">Software Development</p>
                        </div>
                        <div className='flex-col lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-4 p-10 max-xl:p-5'>
                            <div className='grid lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-2'>
                                <div className="lg:col-span-2 max-xl:text-base">
                                    <p>My software projects demonstrate a commitment to excellence in designing and implementing efficient solutions with a focus on clean code practices.</p>
                                </div>
                                <div className="flex justify-between w-full lg:col-span-2 mt-3">
                                    <Image src={'/js.svg'} alt="JavaScript"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/python.svg'} alt="Python"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/java.svg'} alt="Java"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/docker.svg'} alt="Docker"
                                        width={35}
                                        height={24}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-2 borderRight">
                        <div className="flex align-centerali justify-evenly max-lg:my-2">
                            <p className="flex align-center text-2xl font-bold max-lg:xl">Web Technologies</p>
                        </div>
                        <div className='flex-col lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-4 p-10 max-xl:p-5'>
                            <div className='grid lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-2'>
                                <div className="lg:col-span-2 max-xl:text-base">
                                    <p>
                                    My proficiency in web technologies extends to creating responsive, accessible, and intuitive projects that ensure consistent performance across various browsers.
                                    </p>
                                </div>

                                <div className="flex justify-between w-full lg:col-span-2 mt-3">
                                    <Image src={'/react.svg'} alt="React"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/next.svg'} alt="Next"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/express.svg'} alt="Express"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/node.svg'} alt="Node"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/mongodb.svg'} alt="MongoDB"
                                        width={35}
                                        height={24}
                                        priority />
                                    <Image src={'/mysql.svg'} alt="MySql"
                                        width={35}
                                        height={24}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-2">
                        <div className="flex align-center justify-evenly">
                        
                            <p className="flex align-center text-2xl font-bold max-lg:xl max-lg:my-2">Mobile Dev</p>
                        </div>
                        <div className='flex-col lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-center lg:col-span-4 p-10 max-xl:p-5'>
                            <div className='grid lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-2'>
                                <div className="lg:col-span-2 max-xl:text-base">
                                    <p>In mobile development, I specialize in crafting dynamic and user-friendly applications for both Android and iOS platforms. My skills ensure seamless user experiences and optimal performance on diverse devices</p>
                                </div>

                                <div className="flex justify-center w-full lg:col-span-2 mt-3">
                                    <Image src={'/react.svg'} alt="React"
                                        width={35}
                                        height={24}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
