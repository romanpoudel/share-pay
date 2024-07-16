'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function ThemeToggle({ isDropDown = false }: { isDropDown?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loader, or whatever fallback you prefer
  }
  if (isDropDown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="font-base mb-2 inline-flex h-9 w-full items-center justify-start gap-2 whitespace-nowrap rounded-md px-2 text-sm transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <Sun
              className={cn(
                'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
              )}
            />
            <Moon
              className={cn(
                'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('light')}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('system')}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <>
      <div className="flex flex-row items-center space-x-2 rounded-full border p-1">
        <button
          className={cn(
            theme === 'light'
              ? 'rounded-full bg-neutral-200'
              : 'bg-transparent',
            'p-1'
          )}
          onClick={() => setTheme('light')}
        >
          <Sun size={18} className="stroke-1" />
        </button>

        <button
          className={cn(
            theme === 'system'
              ? 'rounded-full bg-neutral-200 dark:bg-neutral-700'
              : 'bg-transparent',
            'p-1'
          )}
          onClick={() => setTheme('system')}
        >
          <Monitor size={18} className="stroke-1" />
        </button>

        <button
          className={cn(
            theme === 'dark' ? 'rounded-full bg-neutral-700' : 'bg-transparent',
            'p-1'
          )}
          onClick={() => setTheme('dark')}
        >
          <Moon size={18} className="stroke-1" />
        </button>
      </div>
    </>
  );
}
