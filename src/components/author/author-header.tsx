import { SocialIcons } from '@/components/icons/socials';
import { Isocials } from '@/types';
import { User } from '@/types/post';
import { Link } from '@/navigation';
import React from 'react';

export default function AuthorHeader({ data }: { data: User }) {
  // console.log('data: ', data);
  let { fullname } = data;
  let socials = JSON.parse(data.socials) as Isocials[];

  return (
    <div className="flex flex-col items-center md:items-start mb-8">
      {fullname ? (
        <h1 className="mb-3 text-2xl md:text-3xl font-medium text-center sm:text-left">
          {fullname}
        </h1>
      ) : (
        <h1>Author</h1>
      )}

      <div className="flex items-center justify-center md:justify-start gap-x-5">
        {SocialIcons.map((social) => {
          const socialIndex = SocialIcons.findIndex(
            (item) => item.name === social.name
          );
          const socialData = socials && socials[socialIndex];

          if (socialData && socialData[social.name] !== '') {
            return (
              <Link
                href={{ pathname: `${socialData[social.name]}` }}
                key={social.name}>
                {React.cloneElement(social.icon, {
                  className: 'w-6 h-6 cursor-pointer fill-primary',
                })}
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
