"use client";

import Image from "next/image";
import Link from "next/link";

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
    <Link href="/menu" aria-label={`查看 ${name} 的菜单详情`} className="block">
      <article className="mx-auto flex flex-row py-6.5 px-3 gap-3 w-full max-w-xl h-54 bg-[url('/images/bg1.webp')] bg-cover bg-center text-amber-50 transition duration-500 hover:scale-107">
        <figure className="w-47 relative">
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
            <p className="">{description}</p>
          </div>

          <div>
            <p className="font-semibold flex justify-end px-4">
              <span className="sr-only">价格：</span>RM {price}
            </p>
          </div>
        </section>
      </article>
    </Link>
  );
}
