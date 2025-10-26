import React from 'react';
import { List, Calendar, Settings, CheckCircle, Users } from 'lucide-react';

const features = [
  {
    title: 'Issues & Tasks',
    description: 'Create, prioritize, and track issues with custom fields and attachments.',
    icon: List,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Sprints & Backlog',
    description: 'Plan sprints, groom backlog, and visualize progress with burndown.',
    icon: Calendar,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Workflows & Automation',
    description: 'Define states and transitions. Trigger rules and notifications.',
    icon: Settings,
    accent: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Releases',
    description: 'Track versions, changelogs, and deployment readiness.',
    icon: CheckCircle,
    accent: 'from-orange-500 to-amber-500',
  },
];

export default function ProjectOverview() {
  return (
    <div className="">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Core Modules</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Built for modern teams with role-based access for Admins, Managers, Developers, Testers, and Viewers.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-white/60">
          <Users className="w-5 h-5" />
          <span className="text-sm">Role-based access control</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <div key={f.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 p-5">
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${f.accent}`} />
            <div className="relative">
              <div className={`h-10 w-10 rounded-md bg-gradient-to-br ${f.accent} grid place-items-center`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
