"use client";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

interface ImageGalleryProps {
  images: SanityImageSource[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: SanityImageSource) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: SanityImageSource, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="photo"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-ful object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
