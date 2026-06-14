import Image from "next/image";

interface Props {
  title: string;
  src: string;
  alt: string;
}

export default function Banner({ title, src, alt }: Props) {
  return (
    <header className="relative w-full h-60 lg:h-106">
      <Image src={src} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-50">
        <h1 className="text-3xl lg:text-5xl">{title}</h1>
      </div>
    </header>
  );
}
