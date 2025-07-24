import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

export function BlogCard({ title, excerpt, image, date, readTime, category, slug }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200"
        >
          Read More
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  )
}
