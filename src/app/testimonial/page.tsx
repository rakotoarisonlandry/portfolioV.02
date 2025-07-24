import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Landry delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with Landry was a pleasure. He understood our vision perfectly and created a mobile app that our users absolutely love.",
    project: "Mobile App Development",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandCorp",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The website redesign Landry created for us increased our conversion rate by 40%. His design skills are truly impressive.",
    project: "Website Redesign",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Landry's technical consulting helped us make crucial decisions that saved us months of development time. Highly recommended!",
    project: "Technical Consulting",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "DataFlow",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The dashboard Landry built for us is not only beautiful but also incredibly functional. Our team productivity has increased significantly.",
    project: "SaaS Dashboard",
  },
  {
    id: 6,
    name: "James Miller",
    role: "Business Owner",
    company: "Local Bistro",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our restaurant's online ordering system has been a game-changer. Landry's work directly contributed to our 30% revenue increase.",
    project: "Restaurant App",
  },
]

export default function TestimonialPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take my word for it. Here&apos;s what my clients have to say about working with me.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">25+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">3+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 text-orange-200" size={32} />

                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">&quot;{testimonial.text}&quot;</p>

                <div className="border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-orange-500">{testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 text-center">
            <Quote className="text-orange-300 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              &quot;Landry is not just a developer, he&apos;s a problem solver. He took our complex requirements and turned them
              into an elegant, user-friendly solution.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Featured client"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">Alex Thompson</div>
                <div className="text-gray-600">CTO, TechVision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Join My Happy Clients?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing. I&apos;m committed to delivering exceptional results that
              exceed your expectations.
            </p>
            <button className="accent-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
