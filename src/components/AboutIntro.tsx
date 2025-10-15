import { BookOpen, Users, Award, Lightbulb } from 'lucide-react';

export default function AboutIntro() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
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
  );
}
