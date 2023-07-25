import React from 'react';

import { homepageNavs } from '#/config/homepage';

import { Icons } from './icons';
import MainNav from './main-nav';

export const Header = () => {
  const navKey = homepageNavs.mainNav.map((item) => item.title).join();

  return (
    <header className="header sticky inset-0 mb-3">
      <div className="nav-header">
        <Icons.logo className=" h-6 rounded-full  md:h-8" />
        <MainNav
          className="nav-header-rhs breadcrumbs"
          items={homepageNavs.mainNav}
          key={navKey}
        />
      </div>
    </header>
  );
};
