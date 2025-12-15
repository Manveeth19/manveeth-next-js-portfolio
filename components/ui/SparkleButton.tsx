// components/ui/SparkleButton.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkle } from "lucide-react";
import { loadFull } from "tsparticles";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { cn } from "@/lib/utils";
import Link from "next/link"; 

const options: ISourceOptions = {
  key: "star",
  name: "Star",
  particles: {
    number: {
      value: 20,
      density: {
        enable: false,
      },
    },
    color: {
      value: ["#7c3aed", "#bae6fd", "#a78bfa", "#93c5fd", "#0284c7", "#fafafa", "#38bdf8"],
    },
    shape: {
      type: "star",
      options: {
        star: {
          sides: 4,
        },
      },
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: { min: 1, max: 4 },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      enable: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 10,
        sync: false,
      },
    },
    links: {
      enable: false,
    },
    reduceDuplicates: true,
    move: {
      enable: true,
      center: {
        x: 120,
        y: 45,
      },
    },
  },
  interactivity: {
    events: {},
  },
  smooth: true,
  fpsLimit: 120,
  background: {
    color: "transparent",
    size: "cover",
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  absorbers: [
    {
      enable: true,
      opacity: 0,
      size: {
        value: 1,
        density: 1,
        limit: {
          radius: 5,
          mass: 5,
        },
      },
      position: {
        x: 110,
        y: 45,
      },
    },
  ],
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: true,
      },
      rate: {
        quantity: 5,
        delay: 0.5,
      },
      position: {
        x: 110,
        y: 45,
      },
    },
  ],
};

// Component definition adapted to accept text and href props
export const SparkleButton = ({ text, href }: { text: string, href: string }) => {
    const [particleState, setParticlesReady] = useState<"loaded" | "ready">();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setParticlesReady("loaded");
        });
    }, []);

    const modifiedOptions = useMemo(() => {
        // Deep clone options to safely modify autoPlay property based on hover state
        const opts = JSON.parse(JSON.stringify(options)); 
        if (opts.emitters) {
             opts.emitters.forEach((emitter: any) => {
                 emitter.autoPlay = isHovering;
             });
        }
        return opts;
    }, [isHovering]);

    return (
        <Link
            href={href}
            target="_blank" 
            download
            // Adjusted outer styling to match the primary button look
            className="group relative inline-block rounded-full bg-blue-600/30 p-1 text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[1.01] shadow-xl shadow-blue-300/50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Inner div for the solid button background and text */}
            <div className="relative flex items-center justify-center gap-2 rounded-full bg-blue-600 px-10 py-3.5 text-white font-bold text-lg hover:bg-blue-700 transition-colors duration-200">
                <Sparkle className="size-5 -translate-y-0.5 animate-sparkle fill-white" />
                
                {/* Small Sparkle icons for decorative effect */}
                <Sparkle
                    style={{ animationDelay: "1s" }}
                    className="absolute bottom-2.5 left-3.5 z-20 size-2 rotate-12 animate-sparkle fill-white"
                />
                <Sparkle
                    style={{ animationDelay: "1.5s", animationDuration: "2.5s" }}
                    className="absolute left-5 top-2.5 size-1 -rotate-12 animate-sparkle fill-white"
                />
                <Sparkle
                    style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
                    className="absolute left-3 top-3 size-1.5 animate-sparkle fill-white"
                />

                <span className="font-semibold">{text}</span>
            </div>
            
            {/* Particle Container */}
            {!!particleState && (
                <Particles
                    id="resume-particles"
                    className={cn("pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity", {
                        "group-hover:opacity-100": particleState === "ready",
                    })}
                    particlesLoaded={async () => {
                        setParticlesReady("ready");
                    }}
                    options={modifiedOptions}
                />
            )}
        </Link>
    );
};