'use client';

/**
 * Client-side only framer-motion compatibility layer
 */
import * as React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

// Create a safe version for server-side rendering
const isBrowser = typeof window !== 'undefined';

// Only import the actual framer-motion if we're in the browser
const FramerMotion = isBrowser 
  ? require('framer-motion')
  : null;

// Helper function to create server-side fallback components
const createFallbackComponent = (tag: string) => {
  return function FallbackComponent(props: any) {
    const { children, ...rest } = props;
    return React.createElement(tag, { ...rest }, children);
  };
};

// Create motion fallbacks for server-side rendering
const fallbackMotion = {
  div: createFallbackComponent('div'),
  span: createFallbackComponent('span'),
  button: createFallbackComponent('button'),
  a: createFallbackComponent('a'),
  ul: createFallbackComponent('ul'),
  li: createFallbackComponent('li'),
  p: createFallbackComponent('p'),
  h1: createFallbackComponent('h1'),
  h2: createFallbackComponent('h2'),
  h3: createFallbackComponent('h3'),
  h4: createFallbackComponent('h4'),
  h5: createFallbackComponent('h5'),
  h6: createFallbackComponent('h6'),
  img: createFallbackComponent('img'),
  section: createFallbackComponent('section'),
  header: createFallbackComponent('header'),
  footer: createFallbackComponent('footer'),
  nav: createFallbackComponent('nav'),
  main: createFallbackComponent('main'),
  article: createFallbackComponent('article'),
  aside: createFallbackComponent('aside')
};

// Export motion safely
export const motion = isBrowser ? FramerMotion.motion : fallbackMotion;

// Safely export other Framer Motion APIs
export const AnimatePresence = isBrowser 
  ? FramerMotion.AnimatePresence 
  : ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const useAnimation = isBrowser 
  ? FramerMotion.useAnimation 
  : () => ({ start: () => Promise.resolve() });

export const useInView = isBrowser 
  ? FramerMotion.useInView 
  : () => [null, false];

export const useMotionValue = isBrowser 
  ? FramerMotion.useMotionValue 
  : (value: any) => ({ get: () => value, set: () => {} });

export const useTransform = isBrowser 
  ? FramerMotion.useTransform 
  : () => 0;

export const useScroll = isBrowser 
  ? FramerMotion.useScroll 
  : () => ({ scrollX: { get: () => 0 }, scrollY: { get: () => 0 } });

export const useSpring = isBrowser 
  ? FramerMotion.useSpring 
  : (value: any) => value;

export const useMotionTemplate = isBrowser 
  ? FramerMotion.useMotionTemplate 
  : () => "";

// Add the create method for Sanity
export const motionWithCreate = {
  ...motion,
  create: function(Component: any) {
    return isBrowser ? FramerMotion.motion(Component) : Component;
  }
};

// Add a MotionConfig component to ensure React context is properly set up
export function MotionConfig({ children }: { children: React.ReactNode }) {
  if (!isBrowser) {
    return <>{children}</>;
  }
  
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}