import { getPhoneNumberForTel, getPhoneNumberDisplay } from '@/utils/phone'

export default function ServicesSection() {
  const services = [
    {
      title: "Family Dentistry",
      description: "Comprehensive dental care for patients of all ages, from children to seniors.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Cosmetic Dentistry", 
      description: "Enhance your smile with teeth whitening, veneers, and cosmetic procedures.",
      icon: "✨"
    },
    {
      title: "Implant Dentistry",
      description: "Replace missing teeth with natural-looking, permanent dental implants.",
      icon: "🦷"
    },
    {
      title: "Preventative Care",
      description: "Regular cleanings, exams, and preventative treatments to maintain oral health.",
      icon: "🛡️"
    },
    {
      title: "Restorative Dentistry",
      description: "Repair and restore damaged teeth with crowns, bridges, and fillings.",
      icon: "🔧"
    },
    {
      title: "Emergency Care",
      description: "Prompt treatment for dental emergencies and urgent care needs.",
      icon: "🚨"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive dental care for your entire family
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center h-full flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <a 
                href={`tel:${getPhoneNumberForTel()}`} 
                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
              >
                📞 Call {getPhoneNumberDisplay()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}