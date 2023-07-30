

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { UserAuthForm } from '#/components/user-auth-form';

function Page() {
 
  return (
    <div className="container">
      <UserAuthForm />
    </div>
  );
}

export default Page;
