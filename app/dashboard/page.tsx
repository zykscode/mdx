'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div>
      <p>His {session?.user?.name}</p>
      dashPage <button onClick={() => signOut()}>sigmout </button>{' '}
    </div>
  );
}
