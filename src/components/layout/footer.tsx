import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">r.Landry</h3>
            <p className="text-gray-400 text-sm">
              Creative Developer crafting exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/work"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>UI/UX Design</p>
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>Consulting</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>landrybrigea@gmail.com</p>
              <p>+261 34 05 081 80</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 RAKOTOARISON TSARAEFADAHY LANDRY BRIGEA.
          </p>
        </div>
      </div>
    </footer>
  );
}
