"use client";

import React, { useRef, useState, useEffect } from "react";
// Import motion from our motion-shim instead of directly from framer-motion
import { motion } from "@/lib/motion-shim";

interface SlideProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Slide({ children, className, delay = 0 }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{
          duration: 0.4,
          delay: delay,
          ease: [0.17, 0.55, 0.55, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
