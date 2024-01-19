import React from 'react';
import animationData from '../../public/animation.json'; // Replace with your animation file
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// Your component
export default function ScrollLottie(){
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};
