import React from 'react'
import { motion } from 'motion/react'
import { BookmarkCheckIcon, LockIcon, MessageSquareCode, SparklesIcon, UploadCloud, ZapIcon } from 'lucide-react';
import { Card } from './ui/card';
import { HoverEffect } from './ui/card-hover-effect';


const features = [
    {
        icon: <UploadCloud className="w-8 h-8 text-indigo-500" />,
        title: "Universal Import",
        description: "Import content from any source - URLs, PDFs, documents, tweets, or YouTube videos."
    },
    {
        icon: <MessageSquareCode className="w-8 h-8 text-blue-500" />,
        title: "AI Chat Interface",
        description: "Chat naturally with your knowledge base. Ask questions and get insights."
    },
    {
        icon: <BookmarkCheckIcon className="w-8 h-8 text-purple-500" />,
        title: "Smart Organization",
        description: "Automatically categorize and tag your content for easy retrieval."
    },
    {
        icon: <ZapIcon className="w-8 h-8 text-yellow-500" />,
        title: "Quick Actions",
        description: "Generate summaries and extract key points with one click."
    },
    {
        icon: <LockIcon className="w-8 h-8 text-green-500" />,
        title: "Secure Storage",
        description: "Your data is encrypted and securely stored with granular permissions."
    },
    {
        icon: <SparklesIcon className="w-8 h-8 text-pink-500" />,
        title: "Smart Connections",
        description: "Discover AI-powered relationships between your content."
    }
];

const Features = () => {
    return (
        <div className="w-screen flex justify-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">Powerful Features for Your Knowledge Base</h2>
                <p className="text-xl text-muted-foreground text-center">Transform how you store and interact with your information</p>
                <HoverEffect items={features} />
            </div>

        </div>
    )
}

export default Features