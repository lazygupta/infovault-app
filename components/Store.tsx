import React from 'react'

import { motion } from "motion/react"
import { FileText, FileVideo, Folder, Globe, NotebookTextIcon } from 'lucide-react';
import { IconBrandTwitter } from '@tabler/icons-react';

const uploadTypes = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Web Pages",
    description: "Save articles, blog posts, and web content",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FileVideo className="w-12 h-12" />,
    title: "Videos",
    description: "Store YouTube tutorials and educational content",
    color: "from-red-500 to-orange-400"
  },
  {
    icon: <IconBrandTwitter className="w-12 h-12" />,
    title: "Tweets",
    description: "Capture insightful Twitter threads and discussions",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Documents",
    description: "Upload PDFs, documents, and research papers",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <NotebookTextIcon className="w-12 h-12" />,
    title: "Notes",
    description: "Write and organize your personal notes or Love Letters ♥",
    color: "from-purple-500 to-violet-400"
  },
  {
    icon: <Folder className="w-12 h-12" />,
    title: "Spaces",
    description: "Create dedicated spaces for different topics",
    color: "from-yellow-500 to-amber-400"
  }
];

const Store = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className=" py-24 relative overflow-hidden max-w-6xl">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Store Everything Important</h2>
            <p className="text-xl text-muted-foreground">
              Brainly supports all types of digital content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-xl bg-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${type.color} rounded-xl transition-opacity duration-300`} />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-4 text-primary"
                    >
                      {type.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store