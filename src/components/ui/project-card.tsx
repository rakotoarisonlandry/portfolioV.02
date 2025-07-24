"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={featured ? 800 : 400}
          height={featured ? 600 : 300}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Action Buttons */}
        <div
          className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {githubUrl && (
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <Github size={16} />
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <ExternalLink size={16} />
            </Button>
          )}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
            {title}
          </h3>
          <ArrowUpRight
            size={20}
            className={`text-gray-400 transition-all duration-200 ${
              isHovered ? "text-orange-500 transform translate-x-1 -translate-y-1" : ""
            }`}
          />
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
