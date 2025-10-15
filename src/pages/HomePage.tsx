import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import AcademicServices from '../components/AcademicServices';
import CoursesGrid from '../components/CoursesGrid';
import CourseCTA from '../components/CourseCTA';
import ResearchSupervision from '../components/ResearchSupervision';
import ResearchCollaboration from '../components/ResearchCollaboration';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Hero onNavigate={handleNavigate} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <AboutIntro />
        </div>
      </section>

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
          <AcademicServices />
        </div>
      </section>

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
          <CoursesGrid onNavigate={handleNavigate} />
          <div className="mt-12">
            <CourseCTA onNavigate={handleNavigate} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Research & Scholarship</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Academic Excellence & Mentorship
            </h2>
            <p className="text-lg text-gray-600">
              Contributing to academic knowledge through rigorous research and scholarly work
            </p>
          </div>
          <ResearchSupervision />
          <div className="mt-16">
            <ResearchCollaboration />
          </div>
        </div>
      </section>
    </div>
  );
}
