"use client";

import { motion } from "motion/react"
import { Brain, Youtube, Twitter, Upload, MessageSquare, BookmarkCheck, Zap, Lock, Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import Features from "@/components/Features";
import { Spotlight } from "@/components/ui/Spotlight";
import Works from "@/components/Works";
import { InfiniteMovingCardsDemo } from "@/components/Testinomials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="purple"
      />
      <Navbar />

      <Hero />

      {/* Upload Types Section */}
      <Store />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <Works/>

      {/* Testimonials Section */}
      <InfiniteMovingCardsDemo/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>

      {/* Floating Elements */}
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}