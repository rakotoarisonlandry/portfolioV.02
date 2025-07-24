"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const tabs = [
  { id: "who", label: "who i am" },
  { id: "education", label: "education" },
  { id: "awards", label: "awards" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("who")

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About me</h2>
              <p className="text-gray-600 mb-8">Details introduce</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "who" && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A Creative UI/UX Designer and Developer based in France.
                  </p>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    <Download size={16} className="mr-2" />
                    Download CV
                  </Button>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    3+ years of professional experience in UI/UX design and web development, working with clients
                    worldwide to create exceptional digital experiences.
                  </p>
                </div>
              )}

              {/* Add other tab contents as needed */}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 z-10">
                <div className="bg-white border border-gray-200 rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">L</span>
                  </div>
                </div>
              </div>

              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="About Landry"
                width={400}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
