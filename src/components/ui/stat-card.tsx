"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface StatCardProps {
  value: string
  label: string
  suffix?: string
  animated?: boolean
}

export function StatCard({ value, label, suffix = "", animated = false }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 magnetic-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl font-bold text-gray-900">
          {value}
          {suffix}
          {suffix && suffix ==="%" ||  suffix ===``?<span className="text-orange-400">%</span>:<span className="text-orange-400">+</span>}
        </div>
        <ArrowUpRight size={20} className="text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
      </div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </div>
  )
}
