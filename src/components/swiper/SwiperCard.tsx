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
      <article className="mx-auto flex h-54 w-full max-w-xl flex-row gap-3 bg-[url('/images/bg1.webp')] bg-cover bg-center px-3 py-6.5 text-amber-50 transition duration-500 hover:scale-107">
        <figure className="relative w-28 shrink-0 sm:w-47">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 112px, 188px"
            className="object-cover"
          />
        </figure>
        <section className="flex min-w-0 flex-1 flex-col justify-between gap-1 px-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-3xl">{name}</h3>
            <p className="text-sm leading-6 sm:text-base">{description}</p>
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
