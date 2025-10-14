import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to Knowledge Hub
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Scholars & Learners through{' '}
              <span className="text-teal-600">Knowledge and Technology</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              PhD Scholar | Research Mentor | Islamic & Tech Educator
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="group bg-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all border-2 border-teal-600 flex items-center justify-center gap-2"
              >
                Contact Now
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-teal-600" />
                <span className="text-sm">abidacademyonline@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="w-5 h-5 text-teal-600" />
                <span className="text-sm">+92 321 4231173</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-teal-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="/Abid pitcher .jpg"
                alt="Dr. Abid Jamshaid"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
