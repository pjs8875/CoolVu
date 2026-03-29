import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coolvu-dark-blue pb-2 md:pb-4">
      <div className="w-full px-2 md:px-3 lg:px-4">
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col items-center gap-10 text-coolvu-dark-blue shadow-xl">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
            {/* Left Side: Logo & Socials */}
            <div className="flex flex-col gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image 
                    src="/logo.png" 
                    alt="CoolVu Logo" 
                    width={150} 
                    height={50} 
                    className="object-contain" 
                  />
                </Link>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/coolvusolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coolvu-medium-blue transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coolvu-dark-blue group-hover:text-white transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/coolvusolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coolvu-medium-blue transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coolvu-dark-blue group-hover:text-white transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://x.com/CoolVuSolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coolvu-medium-blue transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coolvu-dark-blue group-hover:text-white transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="https://www.youtube.com/@coolvuglasssurfacesolution/videos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coolvu-medium-blue transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coolvu-dark-blue group-hover:text-white transition-colors"><path d="M2.5 7.1C2.5 7.1 2.4 5.4 3.2 4.6 4.2 3.6 5.3 3.6 5.8 3.5 8.3 3.3 12 3.3 12 3.3s3.7 0 6.2.2c.5.1 1.6.1 2.6 1.1.8.8.7 2.5.7 2.5s.2 2 .2 4.1v1.6c0 2.1-.2 4.1-.2 4.1s.1 1.7-.7 2.5c-1 1-2.3 1-2.8 1.1-2.9.3-6.2.2-6.2.2s-3.7 0-6.2-.2c-.5-.1-1.6-.1-2.6-1.1-.8-.8-.7-2.5-.7-2.5s-.2-2-.2-4.1V11.2c0-2.1.2-4.1.2-4.1z"></path><polygon points="9.7 15.5 15.5 11.2 9.7 7 9.7 15.5"></polygon></svg>
                </a>
                <a href="https://www.linkedin.com/company/coolvu-solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-coolvu-medium-blue transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coolvu-dark-blue group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Right Side: Navigation */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-left">
              <div>
                <h4 className="font-heading font-bold text-lg mb-4 text-coolvu-dark-blue uppercase tracking-wider">Services</h4>
                <nav className="flex flex-col gap-3 font-sans text-sm text-gray-600">
                  <Link href="/services/solar-and-heat-reduction" className="hover:text-coolvu-medium-blue transition-colors">Solar & Heat Reduction</Link>
                  <Link href="/services/safety-and-security-film" className="hover:text-coolvu-medium-blue transition-colors">Safety & Security Film</Link>
                  <Link href="/services/privacy-and-decorative-film" className="hover:text-coolvu-medium-blue transition-colors">Privacy & Decorative</Link>
                  <Link href="/services/commercial-graphics" className="hover:text-coolvu-medium-blue transition-colors">Commercial Graphics</Link>
                  <Link href="/services/surface-finishes" className="hover:text-coolvu-medium-blue transition-colors">Surface Finishes</Link>
                </nav>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg mb-4 text-coolvu-dark-blue uppercase tracking-wider">Markets</h4>
                <nav className="flex flex-col gap-3 font-sans text-sm text-gray-600">
                  <Link href="/markets/residential" className="hover:text-coolvu-medium-blue transition-colors">Residential</Link>
                  <Link href="/markets/commercial" className="hover:text-coolvu-medium-blue transition-colors">Commercial</Link>
                  <Link href="/markets/educational" className="hover:text-coolvu-medium-blue transition-colors">Educational</Link>
                  <Link href="/markets/energy" className="hover:text-coolvu-medium-blue transition-colors">Energy</Link>
                  <Link href="/markets/fema" className="hover:text-coolvu-medium-blue transition-colors">FEMA</Link>
                  <Link href="/markets/government" className="hover:text-coolvu-medium-blue transition-colors">Government</Link>
                  <Link href="/markets/places-of-worship" className="hover:text-coolvu-medium-blue transition-colors">Places of Worship</Link>
                  <Link href="/markets/retail" className="hover:text-coolvu-medium-blue transition-colors">Retail</Link>
                  <Link href="/markets/data-centers" className="hover:text-coolvu-medium-blue transition-colors">Data Centers</Link>
                  <Link href="/markets/healthcare" className="hover:text-coolvu-medium-blue transition-colors">Healthcare</Link>
                </nav>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg mb-4 text-coolvu-dark-blue uppercase tracking-wider">Company</h4>
                <nav className="flex flex-col gap-3 font-sans text-sm text-gray-600">
                  <Link href="/#solutions" className="hover:text-coolvu-medium-blue transition-colors">Solutions</Link>
                  <Link href="/#process" className="hover:text-coolvu-medium-blue transition-colors">Our Process</Link>
                  <Link href="/#locations" className="hover:text-coolvu-medium-blue transition-colors">Locations</Link>
                  <Link href="/#videos" className="hover:text-coolvu-medium-blue transition-colors">Videos</Link>
                  <Link href="/#testimonials" className="hover:text-coolvu-medium-blue transition-colors">Testimonials</Link>
                  <Link href="/#contact-form" className="hover:text-coolvu-medium-blue transition-colors">Contact</Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Copyright Divider */}
          <div className="w-full border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-sans text-gray-500 text-center md:text-left">
              © {currentYear} CoolVu of Long Island. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm font-sans text-gray-500">
              <Link href="#" className="hover:text-coolvu-medium-blue transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-coolvu-medium-blue transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}