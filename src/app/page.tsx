import Dashboard from '@/components/features/dashboard';
import Header from '@/components/features/header';

export default async function Home() {
  return (
    <div className="flex h-[calc(100dvh-56px)] flex-col">
      <Header />
      <Dashboard />
    </div>
  );
}
