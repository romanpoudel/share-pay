import React from 'react';

export default function PagePlaceholder({ pageName }: { pageName: string }) {
  return (
    <div className="flex h-screen flex-1 flex-col space-y-2 px-4 py-4 sm:h-fit">
      <span className="text-3xl font-bold">{pageName}</span>
      <div className="h-12 w-full rounded-lg border border-dashed border-zinc-500"></div>
      <div className="h-64 w-full rounded-lg border border-dashed border-zinc-500"></div>
      <div className="h-64 w-full rounded-lg border border-dashed border-zinc-500"></div>
      <div className="h-64 w-full rounded-lg border border-dashed border-zinc-500"></div>
      <div className="h-64 w-full rounded-lg border border-dashed border-zinc-500"></div>
      <div className="h-64 w-full rounded-lg border border-dashed border-zinc-500"></div>
    </div>
  );
}
