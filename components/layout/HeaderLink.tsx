import Link from 'next/link';

export default function HeaderLink({ href }: { href: string }) {
  return (
    <button className="text-[#E8DFD8] hover:text-[#C9A88A] transition-colors text-sm tracking-wide">
      <Link href="/">{href}</Link>
    </button>
  );
}
