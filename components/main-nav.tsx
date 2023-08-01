'use client';

import Link from 'next/link';
import React, { memo } from 'react';

import type { MainNavItem } from '#/types';

import { ModeToggle } from './mode-toggle';

type Props = {
  items?: MainNavItem[];
  className?: string;
};

function MainNav({ items, className }: Props) {
  const memoizedItems = React.useMemo(() => {
    return items?.map((item) => (
      <Link
        key={item.href}
        className="duration-['2ms'] ease-lieaar hover hover:bg-decend/80 border-colours-blue p-3 text-sm transition-colors hover:border-b-2 md:p-4"
        href={item.href}
      >
        {item.title}
      </Link>
    ));
  }, [items]);

  return (
    <div className={`${className} flex gap-4 md:gap-10`}>
      {memoizedItems?.length ? (
        <nav
          aria-label="navbar"
          role={'navigation'}
          className="flex items-center justify-between gap-2 text-xs md:gap-8"
        >
          {memoizedItems}
          <ModeToggle />
        </nav>
      ) : null}
    </div>
  );
}

export default memo(MainNav);
