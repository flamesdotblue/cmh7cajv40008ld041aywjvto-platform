import React from 'react';
import { Cpu, Clock, Users, MessageSquare } from 'lucide-react';

const items = [
  {
    title: 'Auto Summaries',
    desc: 'Generate clear issue titles and descriptions from commits or bug reports.',
    icon: Cpu,
    gradient: 'from-fuchsia-500 to-violet-500',
    example: 'Summarize this bug report into a short title and 3-sentence description with steps to reproduce.',
  },
  {
    title: 'ETA Prediction',
    desc: 'Predict task deadlines using workload and historical throughput.',
    icon: Clock,
    gradient: 'from-cyan-500 to-blue-500',
    example: 'Estimate completion time for ISSUE-123 given component complexity and assignee velocity.',
  },
  {
    title: 'Assignee Recommendations',
    desc: 'Recommend the best-fit developer based on expertise and current load.',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500',
    example: 'Rank top 3 assignees for a payments bug affecting checkout latency.',
  },
  {
    title: 'AI Chatbot',
    desc: 'Ask natural questions about sprints, workloads, and timelines.',
    icon: MessageSquare,
    gradient: 'from-amber-500 to-orange-500',
    example: "List all high priority bugs in review for 'Payments' with ETA < 2 days.",
  },
];

export default function AIFeaturesPanel() {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl font-semibold">AI Features</h2>
      <p className="mt-2 text-white/70 max-w-2xl">Turn unstructured input into action, forecast timelines, and get smart assistance powered by modern LLMs.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-white/10 bg-neutral-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 flex-shrink-0 rounded-lg grid place-items-center bg-gradient-to-br ${it.gradient}`}>
                <it.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                <div className="mt-4 rounded-lg bg-neutral-950/60 border border-white/10 p-3">
                  <div className="text-xs text-white/50">Example prompt</div>
                  <div className="mt-1 text-sm text-white/80">“{it.example}”</div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="px-3 py-2 rounded-md bg-white text-neutral-900 text-xs font-semibold">Try</button>
                  <button className="px-3 py-2 rounded-md border border-white/20 text-xs font-semibold hover:border-white/40">Docs</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
