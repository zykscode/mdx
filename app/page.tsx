import Image from 'next/image';
import React from 'react';

import { allPosts } from '#/.contentlayer/generated';
import CoverWrapper from '#/components/cover-wrapper';
import { PageSocial } from '#/components/PageSocial';
import PostCard from '#/components/PostCard';
import { SiteFooter } from '#/components/site-footer';
import { siteConfig } from '#/config/site';
import Me from '#/public/images/hero.png';

export default function IndexPage() {
  return (
    <div className="page-scroller mt-2">
      <CoverWrapper src={Me} />
      <main className="page  page-has-cover page-has-icon page-has-image-icon full-page index-page">
        <div className="absolute -top-16 left-[50%] z-40 -ml-16 h-32 w-32 items-center rounded-full shadow-lg">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={Me}
            placeholder="blur"
            alt="page icon image"
          />
        </div>
        <h1 className="w-full text-center text-[2.5rem] font-bold  leading-tight">
          {`${siteConfig.name}.com`}
        </h1>
        <div className="page-content page-content-has-aside">
          <article className="page-content-inner ">
            <div className="collection block">
              <div className="collection-header">
                <h1 className="mr-2 inline-flex items-center break-words text-xl font-semibold">
                  Posts
                </h1>
              </div>
              <div className="gallery">
                <div className="gallery-view">
                  <div className="gallery-grid gallery-grid-size-medium overflow-hidden bg-item_pink">
                    {allPosts.map((post) => (
                      <PostCard
                        key={post.title}
                        post={post}
                        // coverImages={coverImage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
          <aside className="aside px-4">
            <PageSocial />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
