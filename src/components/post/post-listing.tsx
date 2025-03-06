import Date from '../common/date';
import { Link } from '@/navigation';
import CoverImage from './cover-image';
import PostProps from '@/types/post';

export default function PostListing({
  props,
  slugs,
}: {
  props: PostProps;
  slugs?: string[] | undefined;
}) {
  const { title, image, created_at, fulltext, featured, short, slug } = props;
  return (
    <div className="flex flex-row gap-2 lg:gap-5">
      <div
        className="relative w-1/2 text-center lg:w-1/3 "
        style={{ cursor: 'pointer' }}>
        <div className="w-full h-full">
          {image && (
            <CoverImage
              image_alt={title}
              title={title}
              image={image}
              slug={slug}
            />
          )}
        </div>
      </div>
      <div className="w-1/2 lg:w-2/3">
        {/* <span className="text-text1">{title}</span> */}
        <div className="mt-1 mb-2 text-lg font-semibold leading-6 text-text1">
          <Link href={`/post/${slug}`}>{title}</Link>
        </div>
        <div className="hidden mt-1 mb-2 text-l lg:block">
          <div dangerouslySetInnerHTML={{ __html: short }}></div>
        </div>
        <p className="text-sm text-text3">
          {' '}
          <Date dateString={created_at} />
        </p>
      </div>
    </div>
  );
}
