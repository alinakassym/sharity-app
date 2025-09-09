"use client";
import React from "react";
import { createProgress } from "@gluestack-ui/progress";
import { View } from "react-native";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

const progressStyle = tva({
  base: "bg-gray-200 rounded-full",
  variants: {},
});

const progressFilledTrackStyle = tva({
  base: "bg-blue-500 rounded-full transition-all",
  variants: {},
});

const UIProgress = createProgress({
  Root: View,
  FilledTrack: View,
});

const Progress = React.forwardRef<
  React.ElementRef<typeof UIProgress>,
  React.ComponentPropsWithoutRef<typeof UIProgress> & {
    value?: number;
    className?: string;
  }
>(({ value = 0, className, children, ...props }, ref) => {
  return (
    <UIProgress
      ref={ref}
      className={progressStyle({ class: className })}
      {...props}
    >
      {children}
    </UIProgress>
  );
});

const ProgressFilledTrack = React.forwardRef<
  React.ElementRef<typeof UIProgress.FilledTrack>,
  React.ComponentPropsWithoutRef<typeof UIProgress.FilledTrack> & {
    className?: string;
  }
>(({ className, ...props }, ref) => {
  return (
    <UIProgress.FilledTrack
      ref={ref}
      className={progressFilledTrackStyle({ class: className })}
      {...props}
    />
  );
});

Progress.displayName = "Progress";
ProgressFilledTrack.displayName = "ProgressFilledTrack";

export { Progress, ProgressFilledTrack };
