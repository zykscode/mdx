import Image, { type StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  src: StaticImageData;
};

const CoverWrapper = ({ src }: Props) => {
  return (
    <div className="page-cover-wrapper">
      <Image
        placeholder="blur"
        className="page-cover h-full w-full"
        alt="Page Image wrapper"
        src={src}
      />
    </div>
  );
};

export default CoverWrapper;
