import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/services', label: 'services' },
    { path: '/courses', label: 'courses' },
    { path: '/research', label: 'research' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-600 rounded-lg p-2">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Dr. Abid Jamshaid</h3>
                <p className="text-xs text-gray-400">PhD Scholar</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering scholars and learners through knowledge and technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-teal-400 transition-colors capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Research Guidance</li>
              <li className="text-gray-400">Academic Writing</li>
              <li className="text-gray-400">Islamic Studies</li>
              <li className="text-gray-400">Online Courses</li>
              <li className="text-gray-400">IT Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:abidacademyonline@gmail.com" className="hover:text-teal-400 transition-colors break-all">
                  abidacademyonline@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+923214231173" className="hover:text-teal-400 transition-colors">
                  +92 321 4231173
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            {currentYear} Dr. Abid Jamshaid. All rights reserved. | Built with dedication to education and knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
