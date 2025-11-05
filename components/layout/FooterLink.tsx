import Link from 'next/link';

export default function FooterLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="p-3 transition-all hover:scale-120 hover:bg-[#5A4A3C] rounded-full duration-200">
      <Link href="/">{children}</Link>
    </button>
  );
}
