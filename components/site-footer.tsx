import React from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

import { siteConfig } from '#/config/site';

import { ModeToggle } from './mode-toggle';
import styles from './styles.module.css';

export const SiteFooter = () => {
  const { twitter, github, youtube } = siteConfig.links;
  return (
    <footer className="container bg-yellow py-2 lg:max-w-7xl ">
      <div className="flex flex-col items-center justify-between gap-4 border-t  py-10 md:h-24 md:flex-row md:py-0">
        <div className="order-1 md:order-2">
          <ModeToggle />
        </div>
        <h3 className="order-3 md:order-1">hello 1</h3>
        <div className={`${styles.social} order-2 md:order-3`}>
          {'d' && (
            <a
              className={styles.twitter}
              href={`https://twitter.com/${twitter}`}
              title={`Twitter @${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          )}

          {github && (
            <a
              className={styles.github}
              href={`https://github.com/${github}`}
              title={`GitHub @${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {youtube && (
            <a
              className={styles.youtube}
              href={`https://www.youtube.com/${youtube}`}
              title={`YouTube ${youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
