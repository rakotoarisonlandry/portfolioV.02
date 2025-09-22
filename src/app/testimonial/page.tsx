import Image from "next/image";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  project: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "SARRON Sandra",
    role: "Marketing et Communication",
    image: "/assets/sarron.png",
    rating: 4,
    text: "Landry excels at team collaboration and communication, consistently meets deadlines, and takes full ownership of his responsibilities.",
    project: "Plastikôo plateform",
    company: "Plastikôo",
  },
  {
    id: 2,
    name: "Nomena Andrianiaina",
    role: "Mobile Developer ",
    image: "/assets/nomena.png",
    rating: 4,
    text: "Working with Landry was a genuine pleasure. He demonstrated professionalism, active listening skills, and exceptional teamwork throughout our collaboration.",
    project: "Mobile app for fast AI-powered consultation",
    company: "Sekolintsika",
  },
  {
    id: 3,
    name: "Nomenjanahary Riry",
    role: "Mobile Developer",
    image: "/assets/riry.png",
    rating: 5,
    text: "I had the opportunity to collaborate with Landry on a mobile application development project. From the outset, he demonstrated remarkable adaptability to technical requirements, combining autonomous problem-solving with active listening skills. His energy and commitment to rapid, high-quality deliveries made the collaboration seamless and enjoyable.",
    project: "Sekolintsika plateform",
    company: "Sekolintsika",
  },
  {
    id: 4,
    name: " Razafindrabe Tanteliniaina Vanessa",
    role: "Designer and développeur",
    image: "/assets/vanessa.png",
    rating: 4,
    text: "Landry is someone serious and committed to what he does. He demonstrated responsiveness and collaboration throughout the project. He was a person who was: dynamic, a good listener, with strong adaptability skills.",
    project: "Plastikôo Web application.",
    company: "Plastikôo",
  },
  {
    id: 5,
    name: "RAKOTONDRAZAKA Fitia Ismael",
    role: "Backend Développer",
    image: "/assets/ismael.png",
    rating: 4.5,
    text: "He has unwavering motivation and a thirst for knowledge; he's the person you want on your team.",
    project: "SaaS Dashboard",
    company: "Freelance",
  },
];

export default function TestimonialPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take my word for it. Here&apos;s what my colaborator
              have to say about working with me.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="px-6 lg:px-8 mb-20">
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
      </section> */}

      {/* Testimonials Grid */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote
                  className="absolute top-6 right-6 text-orange-200"
                  size={32}
                />

                <div className="flex  items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div className="text-justify">
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600  text-sm text-justify">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => {
                    if (i < Math.floor(testimonial.rating)) {
                      // Étoile pleine
                      return (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={16}
                        />
                      );
                    } else if (
                      i === Math.floor(testimonial.rating) &&
                      testimonial.rating % 1 !== 0
                    ) {
                      // Demi-étoile
                      return (
                        <div key={i} className="relative">
                          <Star
                            className="text-gray-300 fill-current"
                            size={16}
                          />
                          <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
                            <Star
                              className="text-yellow-400 fill-current"
                              size={16}
                            />
                          </div>
                        </div>
                      );
                    } else {
                      // Étoile vide
                      return (
                        <Star
                          key={i}
                          className="text-gray-300 fill-current"
                          size={16}
                        />
                      );
                    }
                  })}
                </div>

                <p className="text-gray-700 text-justify leading-relaxed mb-4">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-orange-500">
                    {testimonial.project}
                  </span>
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
              &quot;Landry is not just a developer, he&apos;s a problem solver.
              He took our complex requirements and turned them into an elegant,
              user-friendly solution.&quot;
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join My Happy Clients?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing. I&apos;m
              committed to delivering exceptional results that exceed your
              expectations.
            </p>
            <Link href="/contact" className="accent-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </Link >
          </div>
        </div>
      </section>
    </div>
  );
}
