import React from "react";
import { Fade } from "react-awesome-reveal";

interface CFadeProps {
  children: React.ReactNode;
  delay?: number;
  fraction?: number;
}

export function CFade({ children, delay, fraction }: CFadeProps) {
  return (
    <Fade
      delay={delay ?? 100}
      direction="up"
      duration={500}
      cascade
      fraction={fraction ?? 0.25}
      damping={0.25}
      triggerOnce
    >
      {children}
    </Fade>
  );
}
