export default function ResearchCollaboration() {
  return (
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
  );
}
