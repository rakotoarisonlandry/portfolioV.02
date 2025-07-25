import { ContactForm } from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "landrybrigea@gmail.com",
    description: "Send me an email anytime!",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+261 34 05 081 80",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Antananarivo, Madagascar",
    description: "Available for remote work",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "06 hours",
    description: "I'll get back to you quickly",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I&apos;d love to hear about your
              ideas and discuss how we can bring them to life together.
            </p>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, creative
                  projects, or potential collaborations. Whether you have a
                  question or just want to say hi, I&apos;ll do my best to get
                  back to you!
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 rounded-xl p-3 flex-shrink-0">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </h3>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "GitHub",
                      href: "https://github.com/rakotoarisonlandry",
                      color: "bg-gray-900",
                    },
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/in/tsaraefadahy-landry-rakotoarison-224578265/",
                      color: "bg-blue-600",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`${social.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary depending on complexity, but most web projects take 2-6 weeks, while mobile apps can take 6-12 weeks.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "I work with clients worldwide and am comfortable with different time zones and communication preferences.",
              },
              {
                question: "What's included in your design process?",
                answer:
                  "My process includes research, wireframing, UI design, prototyping, and developer handoff with detailed specifications.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, I offer maintenance and support packages to ensure your project continues to perform optimally after launch.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
