'use client'

import Image from 'next/image'
import { pirateOne_regular } from '../../utilities/font';
import { useEffect } from 'react';
import Intro from '../intro/page';
export default function Home() {

  useEffect(() => {
    if(typeof document !== 'undefined' && typeof window !== 'undefined' ){
      const handleMouseMove = (e:any) => {
        document.documentElement.style.setProperty('--pointerX', e.clientX + 'px');
        document.documentElement.style.setProperty('--pointerY', e.clientY + 'px');
      };
      window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
    }
  }, []);

  
  return (
    <>
      <style jsx>{`
      .homebody {
        height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        cursor: none;
        margin: 0;
        position: relative;
        
      }

      .homebody:before {
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle 20vmax at var(--pointerX) var(--pointerY), rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.95) 100%);
      }

      .content {
        padding: 5em;
        color: white;
        font-size: 20px;
      }

      @media (max-width: 1024px) {
        .imageHide {
          display: none; 
        }
      }

      @media (max-width:768px){
        .homebody:before {
          content: '';
          position: absolute;
          top:0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
      }
    `}</style>
      <main className="flex grid min-h-screen flex-col items-center justify-center p-24 lg:grid-cols-12 homebody max-sm:p-5">
        <div className="mb-32 max-lg:mb-5 max-lg; mb-0 grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-12 lg:text-left lg:col-span-8">
          <p className={`max-xl:text-8xl text-9xl lg:col-span-12 ${pirateOne_regular.className}`}>Manish Salian</p>
          <p className={`max-xl:text-xl text-3xl lg:col-span-12`}>Tech alchemist turning ideas into captivating digital experiences with expertise in front-end wizardry and native app sorcery.</p>
        </div>
        <div className="mb-32 grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:col-span-4">
          <Image
            src="/ManishSalian_Profile_2.jpg"
            sizes='50vw'
            height={0}
            width={0}
            style={{ width: 'auto', justifySelf: 'center', borderRadius: '.3rem' }}
            alt="Picture of the author"
            className="w-full h-full object-cover lg:col-span-4 "
             // Set both width and height to 100%, and use object-cover to fill the container
          />
        </div>
      </main>
    </>
  )
}
