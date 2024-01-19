import React from 'react';
// import Lottie from 'lottie-react';
import animationData from '../../public/sentEmailAnimation.json'; // Replace with your animation file
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// Your component
export default function EmailSentLottie(){
  return (
    <div style={{
        display: 'flex',
        justifyContent:'center'
    }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '60%', height: 'auto' }}
      />
    </div>
  );
};
