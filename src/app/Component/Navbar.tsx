'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Users, GraduationCap, Phone, FileText } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'หน้าแรก', icon: Home },
    { href: '/portfolio', label: 'สมัครเรียน', icon: FileText },
    { href: '/admin', label: 'แอดมิน', icon: Users },
    { href: '/member', label: 'สมาชิก', icon: User },
    { href: '/about', label: 'เกี่ยวกับ', icon: GraduationCap },
    { href: '/contact', label: 'ติดต่อ', icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-black border-b-2 border-green-400 sticky top-0 z-50 relative overflow-hidden" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'}}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-green-400/10 to-green-400/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="w-10 h-10 bg-black border-2 border-green-400 rounded-full flex items-center justify-center relative" style={{boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)'}}>
                <span className="text-green-400 font-bold text-xl animate-pulse">⚡</span>
              </div>
            </div>
            <span className="text-white font-bold text-xl group-hover:text-green-400 transition-colors" style={{textShadow: '0 0 10px rgba(74, 222, 128, 0.3)'}}>
              TCAS69 Portal
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 overflow-hidden group ${
                  isActive(href)
                    ? 'bg-black border-2 border-green-400 text-green-400'
                    : 'text-green-100 hover:bg-black/50 hover:text-green-400 border-2 border-transparent hover:border-green-400/50'
                }`}
                style={isActive(href) ? {boxShadow: '0 0 15px rgba(74, 222, 128, 0.4)'} : {}}
              >
                {isActive(href) && (
                  <div className="absolute inset-0 bg-green-400/10 animate-pulse"></div>
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <details className="relative">
              <summary className="flex items-center justify-center w-10 h-10 bg-black border-2 border-green-400 rounded-lg cursor-pointer transition-all duration-300 group" style={{boxShadow: '0 0 10px rgba(74, 222, 128, 0.3)'}}>
                <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="w-6 h-6 flex flex-col justify-center items-center relative z-10">
                  <div className="w-4 h-0.5 bg-green-400 mb-1 transition-all duration-300 group-hover:shadow-sm group-hover:shadow-green-400"></div>
                  <div className="w-4 h-0.5 bg-green-400 mb-1 transition-all duration-300 group-hover:shadow-sm group-hover:shadow-green-400"></div>
                  <div className="w-4 h-0.5 bg-green-400 transition-all duration-300 group-hover:shadow-sm group-hover:shadow-green-400"></div>
                </div>
              </summary>
              
              <div className="absolute right-0 top-12 w-48 bg-black border-2 border-green-400 rounded-lg py-2 z-50 overflow-hidden" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.4)'}}>
                <div className="absolute inset-0 bg-green-400/5"></div>
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`relative flex items-center space-x-3 px-4 py-3 font-medium transition-all duration-300 group ${
                      isActive(href)
                        ? 'bg-green-400/20 text-green-400 border-l-2 border-green-400'
                        : 'text-green-100 hover:bg-green-400/10 hover:text-green-400'
                    }`}
                  >
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}