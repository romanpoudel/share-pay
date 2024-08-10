import Dashboard from '@/components/dashboard';

export default async function Home() {
  return (
    <div className="flex h-[calc(100dvh-56px)] flex-col">
      <Dashboard />
    </div>
  );
}
