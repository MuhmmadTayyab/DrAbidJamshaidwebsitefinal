import { BookOpen, FlaskConical, PenTool, Laptop, Clock, Users, CheckCircle } from 'lucide-react';

interface CoursesGridProps {
  onNavigate: (section: string) => void;
}

export default function CoursesGrid({ onNavigate }: CoursesGridProps) {
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
    <div className="grid md:grid-cols-2 gap-8">
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
  );
}
