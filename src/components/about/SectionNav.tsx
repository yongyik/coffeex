interface Props {
  ariaLabel: string;
  links: {
    href: string;
    label: string;
  }[];
}

export default function SectionNav({ ariaLabel, links }: Props) {
  return (
    <nav aria-label={ariaLabel} className="p-1.5">
      <div className="flex flex-col gap-1.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex h-11 items-center justify-center border-2 border-amber-50/50 bg-amber-50/15 text-sm font-medium text-amber-50 transition hover:bg-amber-50/33 lg:h-22 lg:text-2xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
