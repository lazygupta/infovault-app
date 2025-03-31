"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "Brainly has transformed how I organize my research and content ideas. The AI-powered insights have helped me discover connections I would have never found otherwise."
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "As a developer, I need to keep track of countless articles, documentation, and code snippets. Brainly makes it effortless to store and retrieve everything I need."
    },
    {
      name: "Emily Rodriguez",
      title: "Digital Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      quote: "The ability to save and organize social media content has been game-changing for our marketing strategy. Brainly is like having a personal AI assistant."
    }
  ];

