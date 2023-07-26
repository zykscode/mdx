import Image, { type StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  src: StaticImageData | string;
};

const ImageCard = ({ src }: Props) => {
  return (
    <div className="collection-card-cover">
      <Image
        // placeholder="blur"
        className="wrapper"
        alt="Page Image wrapper"
        src={src}
        width={300}
        height={100}
      />
    </div>
  );
};

export default ImageCard;
