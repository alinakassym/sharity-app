'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react-native';

const ChevronDownIcon = React.forwardRef<
  React.ElementRef<typeof ChevronDown>,
  React.ComponentPropsWithoutRef<typeof ChevronDown>
>(({ size = 20, color = '#666', ...props }, ref) => {
  return (
    <ChevronDown 
      ref={ref} 
      size={size}
      color={color}
      {...props} 
    />
  );
});

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };