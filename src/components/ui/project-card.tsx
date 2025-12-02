"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative cursor-pointer overflow-hidden"
        // onClick={() => liveUrl && window.open(liveUrl, "_blank")}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={featured ? 800 : 800}
          height={featured ? 400 : 400}
          className="w-full h-64 md:h-80  object-cover transition-transform duration-700 group-hover:scale-105"
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
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href={githubUrl}
                  target="_blank"
                  className="bg-white/90 p-4 rounded-full hover:bg-white"
                >
                  <Github size={16} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-44">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-gray-700">
                    View the source code on GitHub
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
          {liveUrl && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href={liveUrl}
                  target="_blank"
                  className="bg-white/90 p-4 rounded-full items-center hover:bg-white"
                >
                  <ExternalLink size={20} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-21">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-700">Go Live</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

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
  );
}
