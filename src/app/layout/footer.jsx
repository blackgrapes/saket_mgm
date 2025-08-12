// app/components/Footer.tsx
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <img src="/logo.png" alt="logo" />
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-[#f82f53] capitalize">mgm saket</div>
            <p className="text-sm text-gray-600 mt-4">
              © 2024 Saket MGM School. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-12 justify-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f82f53] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">Admissions</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">Academics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f82f53] transition">Events</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">News</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#f82f53] transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">Careers</a></li>
                <li><a href="#" className="hover:text-[#f82f53] transition">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons with Lucide */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-[#f82f53] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#f82f53] transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#f82f53] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#f82f53] transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
