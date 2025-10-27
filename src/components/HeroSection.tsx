export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[60vh]">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Smile is Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premier dental care in McCordsville, IN. We provide comprehensive dental services 
              for the whole family in a comfortable, welcoming environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:3176438667" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
              >
                📞 Call 317-643-8667
              </a>
              <a 
                href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block text-center"
              >
                Book Online
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                🦷 Welcome to Gateway Crossing Dental
              </h3>
              <p className="text-blue-700">
                Modern dental care with a gentle touch. Located at 6621 W Broadway, 
                Suite 600, McCordsville, IN 46055.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}