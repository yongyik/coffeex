

interface Props{
    links: { href: string; label: string }[];
}

export default function SectionNav({ links }: Props) {
  return (
    <nav className="flex flex-col gap-1.5 p-1.5">
      {links.map((link) => (
        <a key={link.href} href={link.href} 
        className="
        h-11 bg-amber-50/15 border-2 border-amber-50/50 flex items-center justify-center lg:h-22 lg:text-2xl">
          {link.label}
        </a>
      ))}
    </nav>
  );
}