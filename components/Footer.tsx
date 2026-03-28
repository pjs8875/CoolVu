import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coolvu-off-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="CoolVu Logo" 
                width={150} 
                height={50} 
                className="object-contain brightness-0 invert" // Makes the logo white
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 font-sans font-medium text-sm text-gray-300">
            <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#commercial" className="hover:text-white transition-colors">Commercial</Link>
            <Link href="#residential" className="hover:text-white transition-colors">Residential</Link>
            <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm font-sans text-gray-500 text-center md:text-right">
            <p>© {currentYear} CoolVu of Long Island.</p>
            <p>All Rights Reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}