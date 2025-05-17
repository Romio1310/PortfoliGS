'use client';

import React, { ComponentType } from 'react';
import { motion as framerMotion } from 'framer-motion';

/**
 * This file provides compatibility between Sanity and framer-motion
 * to make them work together properly in client components
 */
export function createSanityMotionHoc(Component: ComponentType<any> & { displayName?: string }) {
  if (typeof Component === 'function') {
    const WrappedComponent: React.FC<any> & { displayName?: string } = (props: any) => {
      // Simple HOC for Sanity components that use motion
      return <Component {...props} />;
    };
    
    // Copy display name and other statics
    if (Component.displayName) {
      WrappedComponent.displayName = `SanityMotion(${Component.displayName})`;
    }
    
    return WrappedComponent;
  }
  
  // If it's not a function, just return it as is
  return Component;
}

// Add a create method that Sanity can use
export const motion = {
  create: createSanityMotionHoc,
  // Add basic motion elements that might be used
  div: framerMotion.div,
  span: framerMotion.span,
  button: framerMotion.button,
  a: framerMotion.a,
  ul: framerMotion.ul,
  li: framerMotion.li,
  p: framerMotion.p,
  h1: framerMotion.h1,
  h2: framerMotion.h2,
  h3: framerMotion.h3,
  h4: framerMotion.h4,
};