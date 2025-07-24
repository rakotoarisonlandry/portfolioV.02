import { BlogCard } from "@/components/ui/blog-card"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest trends in web development, from AI integration to new frameworks that are shaping the industry.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    slug: "future-web-development-2024",
  },
  {
    title: "Creating Accessible User Interfaces: A Complete Guide",
    excerpt:
      "Learn how to design and develop user interfaces that are accessible to everyone, including users with disabilities.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "UI/UX Design",
    slug: "accessible-user-interfaces-guide",
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile-first design approach and how it impacts user experience and SEO.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Design",
    slug: "mobile-first-design-importance",
  },
  {
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Tips and techniques for building React applications that can grow with your business needs.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "React",
    slug: "scalable-react-applications",
  },
  {
    title: "The Art of Minimalist Web Design",
    excerpt: "How to create beautiful, functional websites using minimalist design principles and clean aesthetics.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Nov 20, 2024",
    readTime: "4 min read",
    category: "Design",
    slug: "minimalist-web-design-art",
  },
  {
    title: "Performance Optimization for Modern Web Apps",
    excerpt: "Techniques and tools to optimize your web applications for better performance and user experience.",
    image: "/placeholder.svg?height=250&width=400",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Performance",
    slug: "web-performance-optimization",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thoughts, tutorials, and insights about web development, design, and the ever-evolving world of
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">Latest Post</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{blogPosts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="accent-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Read Article
                </button>
              </div>
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600">Explore all my articles and tutorials</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="accent-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
