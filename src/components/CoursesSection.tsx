import { BookOpen, FlaskConical, PenTool, Laptop, Clock, Users, CheckCircle } from 'lucide-react';

interface CoursesSectionProps {
  onNavigate: (section: string) => void;
}

export default function CoursesSection({ onNavigate }: CoursesSectionProps) {
  const courses = [
    {
      title: 'Islamic Studies',
      level: 'Basic to Advanced',
      icon: BookOpen,
      color: 'teal',
      features: ['Hadith & Fiqh', 'Arabic Grammar', 'Islamic Law', 'Quranic Studies'],
    },
    {
      title: 'Research Methodology',
      level: 'Intermediate to Advanced',
      icon: FlaskConical,
      color: 'blue',
      features: ['Research Design', 'Data Collection', 'Analysis Methods', 'Academic Writing'],
    },
    {
      title: 'Academic Writing Skills',
      level: 'All Levels',
      icon: PenTool,
      color: 'green',
      features: ['Thesis Writing', 'Paper Structure', 'Citation Methods', 'Publication Tips'],
    },
    {
      title: 'Educational Technology Tools',
      level: 'Beginner to Intermediate',
      icon: Laptop,
      color: 'orange',
      features: ['LMS Platforms', 'Online Teaching', 'Digital Tools', 'E-learning Design'],
    },
  ];

  const colorMap: Record<string, string> = {
    teal: 'from-teal-500 to-teal-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Online Learning</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Join Our Interactive Online Programs
          </h2>
          <p className="text-lg text-gray-600">
            Flexible, live, and interactive learning sessions designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${colorMap[course.color]} p-8 text-white`}>
                <course.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-white/90">{course.level}</p>
              </div>

              <div className="p-8">
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Flexible Schedule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Live Sessions</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
          <p className="text-teal-50 mb-8 max-w-2xl mx-auto">
            Contact us via WhatsApp or Email to register for upcoming sessions and transform your educational experience.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
