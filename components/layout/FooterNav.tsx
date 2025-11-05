import { Home, Search, PlusSquare, User } from 'lucide-react';
import FooterLink from './FooterLink';

const footerLinkItems = [
  {
    label: 'Home',
    icon: <Home className="w-6 h-6 stroke-[#E8DFD8]" />,
  },
  {
    label: 'Search',
    icon: <Search className="w-6 h-6 stroke-[#E8DFD8]" />,
  },
  {
    label: 'PlusSquare',
    icon: <PlusSquare className="w-7 h-7 stroke-[#E8DFD8]" />,
  },
  {
    label: 'User',
    icon: <User className="w-6 h-6 stroke-[#E8DFD8]" />,
  },
];

export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#3D3027]/95 backdrop-blur-sm border-t-2 border-[#5A4A3C] py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-around items-center">
          {footerLinkItems.map((linkItem) => (
            <FooterLink key={linkItem.label}>{linkItem.icon}</FooterLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
