import { BookText, FileCheck, BarChart, Globe } from 'lucide-react';

export default function AcademicServices() {
  const academicServices = [
    { title: 'Research Guidance & Proposal Writing', icon: FileCheck },
    { title: 'Thesis & Dissertation Support', icon: BookText },
    { title: 'Data Analysis (SPSS, Excel, NVivo)', icon: BarChart },
    { title: 'Plagiarism Checking & Journal Submission', icon: FileCheck },
    { title: 'Academic Writing & Editing', icon: BookText },
    { title: 'Online Courses & Workshops', icon: Globe },
  ];

  return (
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
  );
}
