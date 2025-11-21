import { getPhoneNumberForTel, getPhoneNumberDisplay } from '@/utils/phone'

export default function ContactSection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Booking appointments with our gentle dentist is easy at our McCordsville dental office. 
              Click the button to book online or call us directly!
            </p>
          </div>
          <div className="lg:w-1/2 text-center">
            <div className="space-y-4">
              <a 
                href={`tel:${getPhoneNumberForTel()}`} 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block w-full sm:w-auto mb-4"
              >
                📞 Call {getPhoneNumberDisplay()}
              </a>
              <div className="text-white opacity-90">
                <p className="mb-2">
                  <span className="inline-block mr-2">📍</span>
                  6621 W Broadway, Suite 600<br />
                  McCordsville, IN 46055
                </p>
                <p>
                  <span className="inline-block mr-2">🕒</span>
                  Call for current office hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}