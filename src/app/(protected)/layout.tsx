import Header from '@/components/features/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex w-full justify-center">
      <div className="min-h-dvh w-full md:max-w-6xl">
        <Header />
        {children}
      </div>
    </div>
  );
}
