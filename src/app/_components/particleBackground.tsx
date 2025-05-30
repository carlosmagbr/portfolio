'use client';

import { Particles } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        width: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: { min: 4, max: 8 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};

const ParticlesBackground = () => {
  return (
      <Particles id="tsparticles" options={particlesOptions} className="z-10 relative"/>
  );
};

export default ParticlesBackground;
