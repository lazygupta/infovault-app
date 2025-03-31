"use client";

import { motion } from "motion/react"
import { Brain, Youtube, Twitter, Upload, MessageSquare, BookmarkCheck, Zap, Lock, Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import Features from "@/components/Features";
import { Vortex } from "@/components/ui/vortex";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {

  const features = [
    {
      icon: <Upload className="w-8 h-8 text-indigo-500" />,
      title: "Universal Import",
      description: "Import content from any source - URLs, PDFs, documents, tweets, or YouTube videos."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "AI Chat Interface",
      description: "Chat naturally with your knowledge base. Ask questions and get insights."
    },
    {
      icon: <BookmarkCheck className="w-8 h-8 text-purple-500" />,
      title: "Smart Organization",
      description: "Automatically categorize and tag your content for easy retrieval."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Quick Actions",
      description: "Generate summaries and extract key points with one click."
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "Secure Storage",
      description: "Your data is encrypted and securely stored with granular permissions."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Smart Connections",
      description: "Discover AI-powered relationships between your content."
    }
  ];

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


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      content: "Brainly has transformed how I organize my research and content ideas. The AI-powered insights have helped me discover connections I would have never found otherwise."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
      content: "As a developer, I need to keep track of countless articles, documentation, and code snippets. Brainly makes it effortless to store and retrieve everything I need."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      content: "The ability to save and organize social media content has been game-changing for our marketing strategy. Brainly is like having a personal AI assistant."
    }
  ];

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Status", href: "#" }
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Security", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 fixed"
        fill="gray"
      />
      <Navbar />

      <Hero />

      {/* Upload Types Section */}
      <Store />

      {/* Features Section */}
      <Features />


      {/* How It Works Section */}
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


      {/* Testimonials Section */}
      <div className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who trust Brainly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">contact@brainly.ai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-muted/50" />
                <Input placeholder="Last Name" className="bg-muted/50" />
              </div>
              <Input placeholder="Email" className="bg-muted/50" />
              <Input placeholder="Subject" className="bg-muted/50" />
              <Textarea
                placeholder="Your Message"
                className="bg-muted/50 min-h-[150px]"
              />
              <Button className="w-full bg-primary text-primary-foreground">
                Send Message
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">Brainly AI</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your AI-powered second brain for storing, organizing, and retrieving digital knowledge.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © 2024 Brainly AI. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed top-40 right-20 opacity-10"
      >
        <Brain className="w-32 h-32" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed bottom-40 left-20 opacity-10"
      >
        <Brain className="w-24 h-24" />
      </motion.div>
    </div>
  );
}