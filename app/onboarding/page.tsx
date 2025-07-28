'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProgressBar from '@/components/ui/ProgressBar';
import Slide from './components/Slide';
import { onboardingData } from './data';
import GoogleSignInButton from './components/Google';

export default function OnboardingPage() {
  const totalSteps = onboardingData.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="flex flex-col items-center bg-neutral-gray-300 h-[100dvh] overflow-hidden">
      <ProgressBar
        steps={totalSteps}
        currentStep={activeIndex + 1}
        className="mt-9"
      />
      <div className="w-full flex-1 overflow-visible">
        <Swiper onSlideChange={handleSlideChange}>
          {onboardingData.map((slide, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <Slide {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex justify-center z-10 fixed bottom-3 mb-6">
        <GoogleSignInButton />
      </div>
    </div>
  );
}
