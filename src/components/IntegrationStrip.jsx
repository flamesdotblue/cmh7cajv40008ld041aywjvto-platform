import React from 'react';
import { Github, Gitlab, Slack, Mail } from 'lucide-react';

export default function IntegrationStrip() {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Integrations</h3>
          <p className="mt-1 text-sm text-white/70">Connect your code, chat, and email. Real-time webhooks and notifications included.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <IntegrationCard icon={Github} label="GitHub" colors="from-white to-neutral-300" />
          <IntegrationCard icon={Gitlab} label="GitLab" colors="from-orange-500 to-red-500" />
          <IntegrationCard icon={Slack} label="Slack" colors="from-fuchsia-500 to-purple-500" />
          <IntegrationCard icon={Mail} label="Email" colors="from-sky-400 to-blue-500" />
        </div>
      </div>
    </div>
  );
}

function IntegrationCard({ icon: Icon, label, colors }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950/50 px-4 py-3">
      <div className={`h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br ${colors}`}>
        <Icon className="h-5 w-5 text-neutral-900" />
      </div>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-white/60">Webhook + OAuth</div>
      </div>
    </div>
  );
}
