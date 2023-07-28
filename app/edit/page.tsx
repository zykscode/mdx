'use client';

import '#/styles/mdx.css';
import '@mdxeditor/editor/style.css';

import { MDXEditor } from '@mdxeditor/editor';
import { allPosts } from 'contentlayer/generated';
import React from 'react';

const Edit = () => {
  return <MDXEditor markdown={allPosts[0].body.raw} />;
};

export default Edit;
