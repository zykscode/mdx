import React from 'react';

import UserRegForm from '#/components/user-reg-form';

type Props = {};

function Page({}: Props) {
  return (
    <div className="container w-full">
      <UserRegForm />
    </div>
  );
}

export default Page;
