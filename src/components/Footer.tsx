import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-gray-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
          <p className="mb-4 text-sm leading-7 text-neutral-300">
            ArtVerse Academy nurtures creative talent through world-class instruction and a high-touch mentorship ecosystem.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition-colors duration-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="transition-colors duration-300 hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors duration-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="transition-colors duration-300 hover:text-white">Instagram</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">YouTube</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-sm">Bandra West, Mumbai</p>
          <p className="text-sm">Maharashtra 400050</p>
          <p className="text-sm">Email: hello@artverse.in</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>
      <p className="pt-8 text-center text-xs">Copyright 2026 ArtVerse Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
