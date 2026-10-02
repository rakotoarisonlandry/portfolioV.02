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
    <div className="px-6 py-24 lg:px-8">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 lg:text-6xl">
              My               <span className="bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Thoughts, tutorials, and insights about web development, design, and the ever-evolving world of
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-orange-50 to-yellow-50 p-8 dark:from-[#30243f] dark:to-[#24222c] lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-600 text-sm">Latest Post</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 lg:text-4xl">{blogPosts[0].title}</h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-3 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Read Article
                </button>
              </div>
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  width={400}
                  height={250}
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
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">All Articles</h2>
            <p className="text-gray-600 dark:text-gray-300">Explore all my articles and tutorials</p>
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
          <div className="rounded-3xl bg-gray-900 p-12 text-white">
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
              <button className="bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-3 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
