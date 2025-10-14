import { BookOpen, Users, Award, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-2">
              <img
                src="/Abid pitcher .jpg"
                alt="Dr. Abid Jamshaid"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-teal-600" />
                <div>
                  <p className="font-bold text-gray-900">PhD Scholar</p>
                  <p className="text-sm text-gray-600">Islamic Studies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Dr. Abid Jamshaid
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in Islamic Studies, Research Supervision, and IT Education,
              I aim to connect tradition with modern learning.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-lg p-2 mt-1">
                  <BookOpen className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600 text-sm">Alimiyah, Graduate, Master's, MPhil, PhD Islamic Studies</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-lg p-2 mt-1">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Languages</h3>
                  <p className="text-gray-600 text-sm">Urdu, English, Arabic, Punjabi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-lg p-2 mt-1">
                  <Lightbulb className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { title: 'Islamic Law & Inheritance', icon: BookOpen },
            { title: 'Arabic Grammar', icon: BookOpen },
            { title: 'Academic Research', icon: Award },
            { title: 'IT & E-learning', icon: Lightbulb },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience & Expertise</h3>
              <p className="text-teal-50 leading-relaxed">
                Research Mentor for MPhil and PhD scholars, Lecturer and Public Speaker,
                Online Islamic Studies Instructor, and Freelance Academic Consultant.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold">Islamic Law Consultancy</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold">Astronomy & Philosophy Research</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-semibold">Arabic Text Translation & Teaching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
