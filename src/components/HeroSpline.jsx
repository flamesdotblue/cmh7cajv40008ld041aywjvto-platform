import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative">
      <div className="h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Plan. Build. Ship. Faster with AI.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            An AI-powered project and issue tracking platform with workflows, sprints, releases, and deep integrations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#overview" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-semibold">
              Explore Features
            </a>
            <a href="#ai" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white/40">
              See AI in Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
