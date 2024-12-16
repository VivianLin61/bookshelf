'use client';
import React from 'react';
import CurrentlyReadingItem from './currently-reading-item';
import DashboardHeader from './dashboard-header';
import { Reading_Status, UserBook } from '@/graphql/graphql';
import Link from 'next/link';
import { Icons } from '@/components/icons';

interface CurrentlyReadingSectionProps {
  currentlyReading: UserBook[];
  count: number;
}

export const CurrentlyReadingSection: React.FC<
  CurrentlyReadingSectionProps
> = ({ currentlyReading, count }) => {
  return (
    // <section className='bg-white '>
    <section className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='flex items-center '>
          <span className='text-beige-700'>Currently Reading</span>
          <span className='mx-2 text-[11px] font-normal text-beige'>•</span>
          <span>{count} books</span>
        </div>
        <div className='flex gap-2'>
          <Link
            href={`/library?status=${Reading_Status.Reading}`}
            className='group/item flex items-center gap-2'
          >
            <span>See more</span>
            <div className='mr-0.5 transition-transform duration-500 group-hover/item:-rotate-45'>
              <Icons.arrowRight className='text-grey-dark font-bold transition duration-300' />
            </div>
          </Link>
        </div>
      </div>

      <div className=' flex justify-between'>
        {/* <DashboardHeader
          href={`/library?status=${Reading_Status.Reading}`}
          title={'Currently Reading'}
          count={count}
        /> */}
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {currentlyReading.map((book, idx) => (
          <CurrentlyReadingItem key={idx} userBook={book} />
        ))}
      </div>
    </section>
  );
};
export default CurrentlyReadingSection;
