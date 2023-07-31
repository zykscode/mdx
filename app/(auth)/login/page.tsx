'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { UserAuthForm } from '#/components/user-auth-form';

function Page() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dashboard');
    }
  });

  return (
    <div className="container">
      <UserAuthForm />
    </div>
  );
}

export default Page;
