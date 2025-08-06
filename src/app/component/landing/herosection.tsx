'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
  pauseOnHover: false,
};

interface HeroImage {
  _id: string;
  imageUrl: string;
  title:string;
  altText:string
}

export default function HeroSection() {
  const [images, setImages] = useState<HeroImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/hero-images');
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      <Slider {...settings} className="h-full w-full">
        {images.map((img, i) => (
          <div key={i} className="relative h-screen w-full">
            <Image
              src={img.imageUrl}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {img.title}
              </h1>
              <p className="text-lg md:text-xl mt-4 text-white">
                {img.altText}
              </p>
              <Button className="mt-6 bg-[#f82f53] hover:bg-black text-white text-lg font-semibold px-6 py-3 rounded-md">
                Admissions Open
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
