import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">ADDRESS & CONTACT DETAILS</h3>
            <p className="mb-4">
              📍 6621 W Broadway<br /> 
              STE 600, McCordsville, <br />
              IN 46055
            </p>
            <p>
              <a href="tel:3176438667" className="text-white hover:text-blue-300 font-semibold">
                📞 317-643-8667
              </a>
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-300 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/hipaa" className="text-white hover:text-blue-300 transition-colors">HIPAA</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-white mb-2">
            © {new Date().getFullYear()}. All Rights Reserved. 
            <a href="tel:3176438667" className="ml-2 hover:text-blue-300 transition-colors">317-643-8667</a>
          </p>
          <p className="text-gray-400">
            Web Development by <a href="https://adrienbird.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">Bird Digital</a>
          </p>
        </div>
      </div>
    </footer>
  )
}