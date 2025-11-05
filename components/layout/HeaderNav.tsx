import { Coffee } from 'lucide-react';
import HeaderLink from './HeaderLink';

const headerHrefs = [
  {
    href: 'ホーム',
  },
  {
    href: 'メニュー',
  },
  {
    href: '店舗',
  },
];
export default function HeaderNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3D3027]/95 backdrop-blur-sm border-b border-[#5A4A3C]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-7 h-7 text-[#C9A88A]" />
            <h1 className="text-2xl text-[#E8DFD8] font-light tracking-widest">
              Cozy Café
            </h1>
          </div>
          <div className="flex items-center gap-10">
            {headerHrefs.map((headerHref) => (
              <HeaderLink key={headerHref.href} href={headerHref.href} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
