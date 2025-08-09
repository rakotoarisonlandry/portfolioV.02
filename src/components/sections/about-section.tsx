"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  SparklesIcon,
  ChevronDown,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
import { saveAs } from "file-saver";

const tabs = [
  { id: "who", label: "who i am" },
  { id: "education", label: "education" },
  { id: "awards", label: "awards" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("who");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const handleDownloadInEnglish = () => {
    const fileUrl = "/assets/file/Obtention_de_diplôme_de _licence.pdf";
    const fileName = "RAKOTOARISON_LANDRY_v.Anglais.pdf";
    saveAs(fileUrl, fileName);
    setShowDownloadOptions(false);
  };

  const handleDownloadInFrench = () => {
    const fileUrl = "/assets/file/RAKOTOARISON_LANDRY.pdf";
    const fileName = "RAKOTOARISON_LANDRY_v.Francais.pdf";
    saveAs(fileUrl, fileName);
    setShowDownloadOptions(false);
  };

  const handleDownloadBoth = () => {
    handleDownloadInEnglish();
    handleDownloadInFrench();
    setShowDownloadOptions(false);
  };
  const navigateToAbout = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/about";
    }
  };
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-14">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex justify-start">
            <div className="relative">
              <div className="absolute -top-4 -right-4 z-10">
                <div className="bg-white border border-gray-200 rounded-full p-3 shadow-lg">
                  <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
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

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About me
              </h2>
              <p className="text-gray-600 mb-8">Details introduce</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                  <div className="text-gray-700 flex space-x-4 leading-relaxed">
                    <span>
                      <SparklesIcon color="purple" />
                    </span>
                    <p>
                      My full name is{" "}
                      <span className="font-semibold">
                        Rakotoarison Tsarefadahy Landry Brigea
                      </span>
                      , a passionate Fullstack Developer with over 01+ years of
                      experience in building dynamic web and mobile
                      applications. I specialize in creating user-friendly
                      interfaces
                    </p>
                  </div>
                  <div className="relative">
                    <span className="flex space-x-5">
                      <Button
                        className="bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-1"
                        onClick={() =>
                          setShowDownloadOptions(!showDownloadOptions)
                        }
                      >
                        <Download size={16} className="mr-2" />
                        Download CV
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            showDownloadOptions ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      <Button
                        onClick={() => navigateToAbout()}
                        className="accent-bg text-white hover:shadow-lg transition-all duration-300"
                      >
                        more about me
                        <ArrowRight height={18} />
                      </Button>
                    </span>

                    {showDownloadOptions && (
                      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <button
                            onClick={handleDownloadInEnglish}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            English Version
                          </button>
                          <button
                            onClick={handleDownloadInFrench}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            French Version
                          </button>
                          <button
                            onClick={handleDownloadBoth}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Both Versions
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {activeTab === "education" && (
                <div className="space-y-4">
                  <div className="text-gray-700 flex space-x-4 leading-relaxed">
                    <span>
                      <SparklesIcon color="purple" />
                    </span>
                    <span>
                      Master degree in{" "}
                      <span className="font-semibold">
                        Computer Science from the University of
                        Fianarantsoa(ENI)
                      </span>
                      , with a focus on software development and web/mobile
                      technologies .
                    </span>
                  </div>
                  <div className="relative">
                    <Button
                      className="bg-gray-900 text-white hover:bg-gray-800 flex items-center gap-1"
                      onClick={() =>
                        setShowDownloadOptions(!showDownloadOptions)
                      }
                    >
                      <Download size={16} className="mr-2" />
                      Download CV
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          showDownloadOptions ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    {showDownloadOptions && (
                      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <button
                            onClick={handleDownloadInEnglish}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            English Version
                          </button>
                          <button
                            onClick={handleDownloadInFrench}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            French Version
                          </button>
                          <button
                            onClick={handleDownloadBoth}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Both Versions
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    3+ years of professional experience in UI/UX design and web
                    development, working with clients worldwide to create
                    exceptional digital experiences.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Profile Image */}
        </div>
      </div>
    </section>
  );
}
