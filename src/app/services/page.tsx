import { Code, Smartphone, Globe, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    features: [
      "Responsiv e Design",
      "Performance Optimization",
      "SEO Friendly",
      "Modern Frameworks",
    ],
    price: "Starting at €2,500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: [
      "Cross-platform",
      "Native Performance",
      "App Store Deployment",
      "Push Notifications",
    ],
    price: "Starting at €4,000",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Analytics Dashboard",
      "Admin Panel",
    ],
    price: "Starting at €3,500",
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    description:
      "Technical consulting and strategic planning for your digital transformation projects.",
    features: [
      "Technical Audit",
      "Strategy Planning",
      "Team Training",
      "Best Practices",
    ],
    price: "€150/hour",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I offer a comprehensive range of digital services to help bring
              your ideas to life and grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 accent-bg rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">
                    What&apos;s included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-8 mb-20 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project is delivered on time
              and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and target audience.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating a detailed project roadmap and timeline.",
              },
              {
                step: "03",
                title: "Design & Development",
                description:
                  "Bringing your vision to life with clean code and beautiful design.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Deploying your project and providing ongoing support.",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 accent-bg rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and create something amazing
              together. I&apos;m here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
