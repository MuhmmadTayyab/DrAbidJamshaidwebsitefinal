interface CourseCTAProps {
  onNavigate: (section: string) => void;
}

export default function CourseCTA({ onNavigate }: CourseCTAProps) {
  return (
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
  );
}
