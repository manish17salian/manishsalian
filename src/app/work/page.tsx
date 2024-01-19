'use client'
import Image from 'next/image';
import { pirateOne_regular } from '../../utilities/font';
import Button from '@/components/button';
import ScrollLottie from '@/components/scrollLottie';

export default function Work() {

    return (

        <>
            <style jsx>
                {
                    `
            .container {
                width: 90%;
                margin: 0 auto;
            }
            
            #cards {
                list-style: none;
                padding-left: 0;
                display: grid;
                grid-template-columns: 5fr;
                grid-template-rows: repeat(5, 87vh);
                gap: 4vw;
                padding-bottom: calc(5 * 1.5rem);
                margin-bottom: 4vw;
            }
            
            #card1 {
                --index: 1;
            }
            #card2 {
                --index: 2;
            }
            #card3 {
                --index: 3;
            }
            #card4 {
                --index: 4;
            }

            #card5 {
                --index: 5;
            }
            
            .card {
                position: sticky;
                top: 0;
                padding-top: calc(var(--index) * 1.5rem);
            }
            
            #card1 .card-body {
                background-color: transparent;
            }
            #card2 .card-body {
                /* background-color: #7EC4CF; */
                background-color: #5B63B7;
            }
            #card3 .card-body {
                background-color: #9296F0;
            }
            #card4 .card-body {
                background-color: #5B63B7;
            }

            #card5 .card-body {
                background-color: #9296F0;
            }
            
            .card-body {
                box-sizing: border-box;
                padding: 30px;
                border-radius: 50px;
                box-shadow: 0 0 30px 0 rgba(0,0,0,0.3);
                height: 85vh;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.5s;
            }
            
            h2 {
                font-size: 2.5em;
            }

            @media (max-width: 1024px) {
                .hide {
                  display: none; 
                }
              }

            `
                }
            </style>
            <div className="container max-sm:p-5">
                <ul id="cards">
                    <li className="card" id="card1 ">
                        <div className="card-body flex-col">
                            <p className={`text-9xl ${pirateOne_regular.className} max-sm:text-6xl text-center`}>My Recent Work</p>
                            <p className={`text-4xl text-center p-3 max-sm:text-xl`}>Scroll to see projects I&apos;ve worked on!</p>
                            <ScrollLottie />
                        </div>
                    </li>
                    <li className="card" id="card2">
                        <a href="https://github.com/manish17salian/Faang_Connect" target="_blank" rel="noopener noreferrer">
                        <div className="card-body">
                            <div className="grid lg:grid-cols-12 w-full h-full">
                                <div className="lg:col-span-3 md:col-span-1 flex justify-center items-center border-r-white-500 hide">
                                    <p className={`text-9xl ${pirateOne_regular.className}`}>1</p>
                                </div>
                                <div className="lg:col-span-9">
                                    <Image src="/faangConnect.png" alt='FaangConnect' width={0}
                                        height={0}
                                        sizes="60vh"
                                        style={{ width: 'auto', borderRadius:"10px" }} />
                                    <p className={`text-5xl ${pirateOne_regular.className} max-md:text-3xl p-4`}>Faang Connect</p>
                                    <p className='text-xl max-lg:text-lg'>FAANGConnect is a scalable & distributed web application designed to ease the job-seeking process within the software development domain. It consolidates the employment opportunities dispersed across the prominent FAANG companies. The primary goal is to simplify the job application process for software developers by centralizing job listings from these organizations.</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="card" id="card3">
                        <a href="https://github.com/tfiroze/Smart-City-Explorer" target="_blank" rel="noopener noreferrer">
                        <div className="card-body">
                            <div className="grid lg:grid-cols-12 w-full h-full">
                                <div className="lg:col-span-3 flex justify-center items-center border-r-white-500 hide">
                                    <p className={`text-9xl ${pirateOne_regular.className}`}>2</p>
                                </div>
                                <div className="lg:col-span-9">
                                    <Image src="/smartCityExp.png" alt='Smart City Explorer' width={0}
                                        height={0}
                                        sizes="60vh"
                                        style={{ width: 'auto', borderRadius:"10px" }} />
                                    <p className={`text-5xl ${pirateOne_regular.className} p-4 max-md:text-3xl`}>Smart City Explorer</p>
                                    <p className='text-xl max-lg:text-lg'>Smart City Explorer (SCE) is a web application designed to help locals and tourists navigate Manhattan&apos;s intricate urban landscape abundant in attractions and culinary establishments. The application curates tailored itineraries by employing recommendation algorithms to enhance itinerary precision and incorporating machine learning models to gauge venue busyness, optimizing urban navigation.</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="card" id="card4">
                        <a href="https://github.com/kcheaito/comp30830-dbbikes" target="_blank" rel="noopener noreferrer">
                        <div className='card-body'>
                            <div className="grid lg:grid-cols-12 w-full h-full">
                                <div className="lg:col-span-3 flex justify-center items-center border-r-white-500 hide">
                                    <p className={`text-9xl ${pirateOne_regular.className}`}>3</p>
                                </div>
                                <div className="lg:col-span-9">
                                    <Image src="/dublinbikes.jpg" alt='Dublin Bikes' width={0}
                                        height={0}
                                        sizes="60vh"
                                        style={{ width: 'auto', borderRadius:"10px" }} />
                                    <p className={`text-5xl ${pirateOne_regular.className} p-4`}>Dublin Bikes</p>
                                    <p className='text-xl max-lg:text-lg'>Dublinbikes is a public bicycle rental scheme that operates in the city of Dublin. It is designed to provide users with real-time information about the availability of bikes and bike stands at all Dublin Bikes stations. Both the web and mobile versions of the app includes a map of Dublin that allows users to locate the nearest bike station with available bikes and stands. Users can also get directions to their station of choice.</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </li>
                    <li className="card" id="card5">
                        <a href="https://www.travelxp.com/" target="_blank" rel="noopener noreferrer">
                        <div className="card-body">
                            <div className="grid lg:grid-cols-12 w-full h-full">
                                <div className="lg:col-span-3 md:col-span-1 flex justify-center items-center border-r-white-500 hide">
                                    <p className={`text-9xl ${pirateOne_regular.className}`}>4</p>
                                </div>
                                <div className="lg:col-span-9">
                                    <Image src="/travelxp.jpg" alt='Travelxp' width={0}
                                        height={0}
                                        sizes="50vh"
                                        style={{ width: 'auto', borderRadius:"10px" }} />
                                    <p className={`text-5xl ${pirateOne_regular.className} max-md:text-3xl p-4`}>Travelxp</p>
                                    <p className='text-xl max-lg:text-lg'>In my previous role at Travelxp, an OTT and booking platform, I played a key role in developing innovative features for both Android and iOS mobile applications using React Native. Additionally, I was responsible for maintaining React-based Web applications, including CRM and CMS systems.</p>
                                </div>
                            </div>

                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}