interface Props {
  ariaLabel: string;
  links: {
    href: string;
    label: string;
  }[];
}

export default function SectionNav({ ariaLabel, links }: Props) {
  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-16 z-30 border-y border-amber-50/20 bg-[url('/images/bg1.webp')] bg-cover bg-center px-4 py-2 shadow-lg"
    >
      <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex h-12 min-w-36 flex-1 shrink-0 items-center justify-center rounded-xl border border-amber-50/40 bg-amber-50/10 px-4 text-sm font-medium text-amber-50 transition hover:bg-amber-50/20 sm:min-w-0 lg:text-base"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
