import Link from 'next/link';

import ImageCard from './image-card';
import CardBody from './ui/card-body';


type Props = {
  post: any;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { title, description, date: time } = post;
  return (
    <Link
      className="collection-card collection-card-size-medium"
      href={post.slug}
    >
      <ImageCard src={`${post.image}`} />
      <CardBody time={time} description={description} title={title} />
    </Link>
  );
};

export default PostCard;
