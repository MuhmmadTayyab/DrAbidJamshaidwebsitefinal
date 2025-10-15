import { GraduationCap, BookMarked } from 'lucide-react';

export default function ResearchSupervision() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-teal-100 rounded-lg p-3">
            <GraduationCap className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Supervision & Guidance</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          Providing comprehensive mentorship and guidance to postgraduate and PhD scholars across multiple disciplines.
          Helping students navigate their research journey from topic selection to final submission.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span>Research Proposal Development</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span>Methodology Design & Analysis</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span>Thesis Writing & Publication Support</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <BookMarked className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Publications & Contributions</h3>
        </div>
        <p className="text-teal-50 leading-relaxed mb-6">
          Contributing to academic discourse through research papers, articles, and scholarly publications
          in the fields of Islamic Studies, Education, and Interdisciplinary Research.
        </p>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <p className="text-white font-medium mb-2">Current Research Projects</p>
          <p className="text-teal-50 text-sm">
            Actively engaged in multiple research initiatives exploring the intersection of traditional
            Islamic scholarship and contemporary educational methodologies.
          </p>
        </div>
      </div>
    </div>
  );
}
