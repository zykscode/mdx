import React from 'react';

import { UserAuthForm } from '#/components/user-auth-form';

type Props = {};

function Page({}: Props) {
  return (
    <div className="container">
      <UserAuthForm />
    </div>
  );
}

export default Page;
