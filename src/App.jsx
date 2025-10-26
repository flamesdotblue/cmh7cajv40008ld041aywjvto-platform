import React from 'react';
import HeroSpline from './components/HeroSpline';
import ProjectOverview from './components/ProjectOverview';
import AIFeaturesPanel from './components/AIFeaturesPanel';
import IntegrationStrip from './components/IntegrationStrip';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 grid place-items-center">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold">Astra PM</div>
              <div className="text-xs text-white/60">AI-native project & issue management</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="#overview">Overview</a>
            <a className="hover:text-white" href="#ai">AI</a>
            <a className="hover:text-white" href="#integrations">Integrations</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-white text-neutral-900 text-sm font-semibold">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <HeroSpline />
        <section id="overview" className="mx-auto max-w-7xl px-6 py-12">
          <ProjectOverview />
        </section>
        <section id="ai" className="mx-auto max-w-7xl px-6 py-12">
          <AIFeaturesPanel />
        </section>
        <section id="integrations" className="mx-auto max-w-7xl px-6 py-12">
          <IntegrationStrip />
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Astra PM. All rights reserved.</p>
          <p>Secure • Scalable • AI-powered</p>
        </div>
      </footer>
    </div>
  );
}
