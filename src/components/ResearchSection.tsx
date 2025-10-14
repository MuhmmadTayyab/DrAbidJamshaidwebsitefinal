import { Scale, Telescope, Languages, Lightbulb, BookMarked, GraduationCap } from 'lucide-react';

export default function ResearchSection() {
  const focusAreas = [
    {
      title: 'Islamic Law',
      description: 'In-depth research on Shariah principles, jurisprudence, and contemporary legal applications',
      icon: Scale,
      color: 'teal',
    },
    {
      title: 'Astronomy & Timekeeping',
      description: 'Islamic astronomical traditions and their modern applications in prayer times and lunar calendar',
      icon: Telescope,
      color: 'blue',
    },
    {
      title: 'Arabic Texts',
      description: 'Translation, interpretation, and analysis of classical and contemporary Arabic literature',
      icon: Languages,
      color: 'green',
    },
    {
      title: 'Interdisciplinary Philosophy',
      description: 'Bridging Islamic philosophy with contemporary thought and educational methodologies',
      icon: Lightbulb,
      color: 'purple',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Research & Scholarship</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Areas of Research Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Contributing to academic knowledge through rigorous research and scholarly work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border-2 ${colorMap[area.color].border} hover:shadow-xl transition-all`}
            >
              <div className={`${colorMap[area.color].bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <area.icon className={`w-8 h-8 ${colorMap[area.color].icon}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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

        <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interested in Research Collaboration?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I welcome opportunities for academic collaboration, research partnerships, and scholarly exchange.
            Let's work together to advance knowledge and understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:abidacademyonline@gmail.com"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Email for Collaboration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
