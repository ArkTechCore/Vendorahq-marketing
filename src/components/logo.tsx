
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="VendoraHQ Home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white">
        <Image
          src="/brand/logo.jpeg"
          alt="VendoraHQ logo"
          fill
          sizes="44px"
          className="object-contain"
          priority
        />
      </span>

      <span className="whitespace-nowrap text-xl font-bold tracking-tight text-black">
        Vendora
        <span className="text-[#26845D]">HQ</span>
      </span>
    </Link>
  );
}
