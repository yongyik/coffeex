"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

export default function SwiperCard({
  src,
  alt,
  name,
  description,
  price,
}: Props) {
  return (
    <article className="mx-auto flex flex-row py-6.5 px-9 gap-3 w-full max-w-xl h-54 bg-[url('/images/bg1.webp')] bg-cover bg-center text-amber-50 transition duration-500 hover:scale-115">
      <figure className="w-42  relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="128px"
          className=" object-cover"
        />
      </figure>
      <section className="flex flex-col gap-1 justify-between px-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl">{name}</h3>
          <p className="text-">{description}</p>
        </div>

        <div>
          <p className="font-semibold flex justify-end px-4">
            <span className="sr-only">价格：</span>RM {price}
          </p>
        </div>
      </section>
    </article>
  );
}
