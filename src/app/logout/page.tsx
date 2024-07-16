import { signOut } from '@/auth';
import React from 'react';

const page = () => {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button>logout</button>
    </form>
  );
};

export default page;
