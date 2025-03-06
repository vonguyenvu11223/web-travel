import { Link } from '@/navigation';
import * as React from 'react';

export interface IBreadCrumbTourProps {
  data?: {
    title: string;
    href?: string;
  }[];
}

export default function BreadCrumbTour({ data }: IBreadCrumbTourProps) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-3 text-sm md:flex-row">
        <div className="flex items-center mr-5 font-medium gap-x-1">
          <span>
            <Link href={'/'} aria-label={'Kapanda'} className="hover:underline">
              Home
            </Link>
          </span>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <div key={item.title}>
                <span className="text-text2">/</span>
                {item.href ? (
                  <span>
                    {' '}
                    <Link
                      href={{
                        pathname: `/${item.href}`,
                      }}
                      aria-label={item.title}
                      className="hover:underline">
                      {item.title}{' '}
                    </Link>
                  </span>
                ) : (
                  <span> {item.title} </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
