import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
  /** Navbar stays compact; hero/footer can use larger */
  size?: "nav" | "md" | "lg";
};

const sizeClass = {
  nav: "h-7 w-auto max-h-7 object-contain sm:h-8 sm:max-h-8",
  md: "h-9 w-auto object-contain sm:h-10",
  lg: "h-12 w-auto object-contain sm:h-14",
} as const;

const sizePixels = {
  nav: { width: 110, height: 28 },
  md: { width: 150, height: 38 },
  lg: { width: 220, height: 56 },
} as const;

export function BrandLogo({
  className = "",
  priority = false,
  href = "/",
  size = "nav",
}: BrandLogoProps) {
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={site.logo}
        alt={site.name}
        width={sizePixels[size].width}
        height={sizePixels[size].height}
        priority={priority}
        className={sizeClass[size]}
      />
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} className="inline-flex shrink-0" aria-label={site.name}>
      {mark}
    </Link>
  );
}
