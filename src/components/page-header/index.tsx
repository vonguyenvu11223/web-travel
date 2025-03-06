import Image from 'next/image';

export interface HeaderParams {
  title: string;
  sub_title?: string;
  slug?: string;
  img?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  sub_title,
  slug,
  img,
  children,
}: HeaderParams) {
  return (
    <div className="w-full h-[200px] md:h-[330px] bg-gray-200 relative">
      {img && (
        <Image
          src={img}
          alt={title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}      // Use the highest quality setting
          priority          // Prioritize this critical header image
          unoptimized       // Disable Next.js optimization/resizing
        />
      )}

      {/* Overlay with inline opacity */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.2 }}
      />

      <div className="container absolute z-30 flex flex-col w-full text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-start">
        <div className="w-full md:w-2/5">
          <h1 className="mb-1 text-2xl font-semibold md:mb-4 md:text-3xl lg:text-4xl drop-shadow-md">
            {title}
          </h1>
          <div className="block md:hidden">
            <div className="relative w-full py-5 text-text1">{children}</div>
          </div>
          <p className="hidden md:block text-lg drop-shadow-sm">{sub_title}</p>
        </div>
      </div>
    </div>
  );
}
