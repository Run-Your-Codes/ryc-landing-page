"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[600px] items-center justify-center overflow-hidden rounded-lg p-10 ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=ScJCfhkd77yD&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-20 w-20">
            <Image
              src="https://img.icons8.com/?size=512&id=XXZxxD0Plaaj&format=png"
              className="h-12 w-12"
              alt=""
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=54087&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
          <Circle ref={div2Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=13441&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
          <Circle ref={div3Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=44442&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
          <Circle ref={div4Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=13679&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
          <Circle ref={div5Ref} className="h-16 w-16">
            <Image
              src="https://img.icons8.com/?size=512&id=54087&format=png"
              className="h-8 w-8"
              alt=""
            />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
