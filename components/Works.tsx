import React from 'react'
import {motion}  from 'motion/react'
import { Vortex } from './ui/vortex'

const steps = [
    {
      number: "1",
      title: "Add Your Content",
      description: "Import any type of content - paste URLs, upload documents, or add notes directly.",
      tags: ["URLs", "PDFs", "Notes"]
    },
    {
      number: "2",
      title: "AI Processing",
      description: "Our AI automatically analyzes, indexes, and connects your content.",
      tags: ["Analysis", "Indexing", "Summaries"]
    },
    {
      number: "3",
      title: "Chat & Discover",
      description: "Ask questions and explore your knowledge base through natural conversation.",
      tags: ["Chat", "Search", "Insights"]
    }
  ];

const Works = () => {
    return (
        <Vortex>
            <div className="mx-auto px-4 py-20 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">How Brainly AI Works</h2>
                    <p className="text-xl text-muted-foreground">Three simple steps to your personalized AI knowledge assistant</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center"
                        >
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                                )}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground mb-4">{step.description}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {step.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Vortex>
    )
}

export default Works