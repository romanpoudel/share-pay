'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader className='animate-spin mr-4' size={20}/>}
      {children}
    </Button>
  );
}
