import React from "react";
import { Database, Smartphone, Layers, PenTool } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const TechnologyStack = () => {
  const { language } = useLanguage();

  const categories = [
    {
      name: language === "NL" ? "iOS" : "iOS",
      icon: <Smartphone />,
      technologies:
        language === "NL"
          ? ["Swift", "Objective-C", "X-Code", "SwiftUI"]
          : ["Swift", "Objective-C", "X-Code", "SwiftUI"],
    },
    {
      name: language === "NL" ? "Android" : "Android",
      icon: <Smartphone />,
      technologies:
        language === "NL"
          ? [
              "Java",
              "Kotlin",
              "Android Studio",
              "Versiebeheertools (Git, GitLab, Bit Bucket)",
            ]
          : [
              "Java",
              "Kotlin",
              "Android Studio",
              "Version control tools (Git, GitLab, Bit Bucket)",
            ],
    },
    {
      name: language === "NL" ? "Cross Platform" : "Cross Platform",
      icon: <Layers />,
      technologies:
        language === "NL"
          ? ["Flutter", "React Native", "Ionic", "NativeScript"]
          : ["Flutter", "React Native", "Ionic", "NativeScript"],
    },
    {
      name: language === "NL" ? "Database" : "Database",
      icon: <Database />,
      technologies:
        language === "NL"
          ? [
              "Firebase",
              "Redis",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "DynamoDB",
              "SQLite",
            ]
          : [
              "Firebase",
              "Redis",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "DynamoDB",
              "SQLite",
            ],
    },
    {
      name: language === "NL" ? "Ontwerptool" : "Design Tool",
      icon: <PenTool />,
      technologies:
        language === "NL"
          ? [
              "Figma",
              "Sketch",
              "Adobe XD",
              "Zeplin",
              "Photoshop",
              "Illustrator",
              "After Effects",
              "InVision",
            ]
          : [
              "Figma",
              "Sketch",
              "Adobe XD",
              "Zeplin",
              "Photoshop",
              "Illustrator",
              "After Effects",
              "InVision",
            ],
    },
  ];

  return (
    <div className="w-4/5 mx-auto mt-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-[#128277] text-white rounded-lg p-4 mb-4"
        >
          <div className="flex items-center mb-2 text-white">
            {category.icon}
            <h3 className="text-lg font-semibold text-white	 ml-2">
              {category.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-white">
            {category.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-[#004D47] text-slate-200 rounded-full px-3 py-1 text-sm flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyStack;
