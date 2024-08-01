import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ place }) {
  return (
    <Link
      href="/catalog"
      className="cursor-pointer h-[500px] w-[350px] flex flex-wrap rounded-xl"
    >
      <div className="relative h-2/3 w-full">
        <Image
          src={place.image}
          layout="fill"
          objectFit="cover"
          className="h-full w-full overflow-hidden rounded-tl-xl roundedn-tr-xl object-cover"
        />
        <div className="absolute right-0 bottom-0 p-4 bg-blue-700 text-white rounded">
          {place.city}
        </div>
      </div>
    </Link>
  );
}
