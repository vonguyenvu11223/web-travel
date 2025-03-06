import cn from 'classnames';
import { Link } from '@/navigation';
import ImageCustom from '../image-custom';

interface Props {
  title: string;
  image: string;
  image_alt: string;
  slug?: string;
  className?: string;
}

export default function CoverImage({
  title,
  image,
  image_alt,
  slug,
  className,
}: Props) {
  const images = (
    <ImageCustom
      src={image}
      image_alt={image_alt}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow w-full h-full object-cover duration-200 rounded-lg':
          slug !== null || slug !== undefined,
      })}
    />
  );
  return (
    <>
      {slug ? (
        <Link
          href={`/post/${slug}`}
          aria-label={title}
          className={`sm:mx-0 w-full relative block ${
            className?.includes('min-h-') || className?.includes('h-')
              ? className
              : `min-h-[22rem] ${className}`
          }`}>
          {images}
        </Link>
      ) : (
        <div
          className={`sm:mx-0 w-full relative ${
            className?.includes('min-h-') || className?.includes('h-')
              ? className
              : `min-h-[22rem] ${className}`
          }`}>
          {images}
        </div>
      )}
    </>
  );
}
