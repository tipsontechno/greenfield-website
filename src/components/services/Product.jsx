import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Camera, Gauge, Home, Music, Settings } from "lucide-react";

const ProductsShowcase = () => {
  const products = [
    {
      name: "SMART SWITCHES",
      icon: <Home className="w-6 h-6" />,
      features: [
        "Touch Controlled via Remote, Voice & Mobile",
        "Works without Internet",
        "Mood Settings",
        "Configurable Two-Way",
        "Custom designed front plate",
      ],
    },
    {
      name: "SMART SECURITY",
      icon: <Camera className="w-6 h-6" />,
      features: [
        "CCTV and IP Cameras",
        "Door Sensor",
        "Intrusion Sensor",
        "Panic Button",
        "Local and Mobile Alarm",
        "Remote Arm & Disarm",
      ],
    },
    {
      name: "SMART SENSORS",
      icon: <Gauge className="w-6 h-6" />,
      features: [
        "Ambient",
        "Gas Leak",
        "Temperature",
        "Humidity",
        "Water Level",
        "Motion/presence",
      ],
    },
    {
      name: "LIGHTING CONTROL",
      icon: <Lightbulb className="w-6 h-6" />,
      features: [
        "RGB Lighting Control",
        "Dimming",
        "Grouping",
        "Tunable LED",
        "Mood/Scene Control",
        "Light fixtures",
      ],
    },
    {
      name: "HOME THEATRE",
      icon: <Music className="w-6 h-6" />,
      features: [
        "Acoustic Design",
        "Best of Breed Home Audio/Video Systems",
        "Customized Lighting",
      ],
    },
    {
      name: "CUSTOM SOLUTIONS",
      icon: <Settings className="w-6 h-6" />,
      features: [
        "Sliding Gate controls",
        "Garage Door Controls",
        "Integration with Gas, Water and Electricity meters",
        "Building Automation Systems",
        "Curtain Controls",
      ],
    },
  ];

  return (
    <div className="w-full bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Products & Solutions
        </motion.h2>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="text-gray-600">{product.icon}</div>
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center image and bottom text */}
        <div className="mt-12 text-center">
          <div className="mb-8">
            <img
              src="/api/placeholder/600/300"
              alt="Smart Home Control"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-gray-600 font-medium"
          >
            Enabled by RF Remote, Voice and Mobile App
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
