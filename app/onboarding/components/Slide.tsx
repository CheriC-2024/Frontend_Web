// components/Slide.tsx
import Image from 'next/image';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

export default function Slide({ image, title, description }: SlideProps) {
  return (
    <div className="w-full">
      <Image
        src={image}
        alt={title}
        width={362}
        height={300}
        className="w-screen h-auto mx-auto"
      />
      <div className="text-center bg-neutral-white w-full h-[50dvh] py-[54px]">
        <div className="text-h3">{title}</div>
        <div className="text-gray-600 mt-5 whitespace-pre-line">
          {description}
        </div>
      </div>
    </div>
  );
}
