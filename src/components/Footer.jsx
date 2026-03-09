import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  'Get Help': ['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us'],
  'About Nike': ['News', 'Careers', 'Investors', 'Sustainability', 'Purpose'],
  'Join Us': ['Nike App', 'Nike Run Club', 'Nike Training Club', 'SNKRS'],
};

export default function Footer() {
  return (
    <footer className="bg-nike-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + Newsletter */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-nike-black transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-3">Get the latest drops & deals</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-white placeholder-gray-500"
              />
              <button className="bg-white text-nike-black px-4 py-2 rounded-r-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-12 fill-current" viewBox="0 0 69 32">
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.48-3.36-1.2-2.4.24-5.76t4.56-6.24q1.44-1.2.72-.48-6 7.68-1.68 10.56 2.64 1.68 8.16-.48L68.56 4z" />
            </svg>
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Guides</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Sale</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
