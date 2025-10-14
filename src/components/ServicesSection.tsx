import { BookText, Languages, Laptop, FileCheck, BarChart, Globe } from 'lucide-react';

export default function ServicesSection() {
  const academicServices = [
    { title: 'Research Guidance & Proposal Writing', icon: FileCheck },
    { title: 'Thesis & Dissertation Support', icon: BookText },
    { title: 'Data Analysis (SPSS, Excel, NVivo)', icon: BarChart },
    { title: 'Plagiarism Checking & Journal Submission', icon: FileCheck },
    { title: 'Academic Writing & Editing', icon: BookText },
    { title: 'Online Courses & Workshops', icon: Globe },
  ];

  const islamicServices = [
    { title: 'Arabic to English/Urdu Translation', icon: Languages },
    { title: 'Hadith & Fiqh Research Support', icon: BookText },
    { title: 'Guidance for Madrasa Graduates', icon: BookText },
    { title: 'Islamic Publishing Help', icon: FileCheck },
  ];

  const techServices = [
    { title: 'LMS & E-learning Setup', icon: Laptop },
    { title: 'Web Development Guidance', icon: Globe },
    { title: 'Online Class Setup (Zoom / Google Meet)', icon: Laptop },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Expert Guidance in Education, Research & Technology
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive academic and research support tailored to your needs
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="bg-teal-600 rounded-lg p-2">
                <BookText className="w-6 h-6 text-white" />
              </div>
              Academic Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                >
                  <service.icon className="w-10 h-10 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <Languages className="w-6 h-6 text-white" />
              </div>
              Islamic Research Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {islamicServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                >
                  <service.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="bg-green-600 rounded-lg p-2">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              IT & Tech Support
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {techServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
                >
                  <service.icon className="w-10 h-10 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-teal-50">Confidential Work</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-teal-50">Student Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">✓</div>
                <p className="text-teal-50">Turnitin Reports Provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
