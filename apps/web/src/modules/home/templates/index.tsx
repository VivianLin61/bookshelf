// HomeTemplate.tsx
import React from 'react';
import { BookCountsResponse, Shelf, UserBook } from '@/graphql/graphql';
import { ReadingSummary } from '../components/readidng-summary';
import { MainBookList } from '../components/main-booklist';
import CurrentlyReadingSection from '../components/currently-reading-section';
import UpNextCard from '../components/up-next-card';
import StatsCard from '../components/stats-card';

interface HomeTemplateProps {
  currentlyReading: UserBook[];
  wantToRead: UserBook[];
  shelves: Shelf[];
  username: string;
  upNext: UserBook[];
  bookCounts: BookCountsResponse;
}

export default function HomeTemplate({
  currentlyReading,
  wantToRead,
  username,
  bookCounts,
  upNext,
}: HomeTemplateProps) {
  return (
    <main className='py-8'>
      <div>
        <section aria-labelledby='section-1-title' className='mb-4'>
          <div id='section-1-title'>
            <div className='ml-1 overflow-hidden rounded-lg text-beige-700'>
              <div className='text-4xl font-bold'>
                Welcome back, {username} 👋
              </div>
              <span className='mt-1 text-xl text-gray-400'>
                Here's what you've been reading
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className='flex justify-between'>
        <StatsCard
          title='New Users Today'
          value={150}
          percentage={5}
          comparisonText='VS. Yesterday'
          iconSrc='/icons/up-arrow.svg'
        />

        <StatsCard
          title='Total Sales'
          value={12800}
          percentage={-3}
          comparisonText='VS. Last Week'
          iconSrc='/icons/down-arrow.svg'
        />
        <StatsCard
          title='New Users Today'
          value={150}
          percentage={5}
          comparisonText='VS. Yesterday'
          iconSrc='/icons/up-arrow.svg'
        />
        <StatsCard
          title='New Users Today'
          value={150}
          percentage={5}
          comparisonText='VS. Yesterday'
          iconSrc='/icons/up-arrow.svg'
        />
      </div>

      <div className='grid grid-cols-1 items-start gap-4 xl:grid-cols-16 xl:gap-8'>
        <div className='grid grid-cols-1 gap-4 xl:col-span-11'>
          {currentlyReading.length > 0 && (
            <CurrentlyReadingSection
              count={bookCounts.readingCount}
              currentlyReading={currentlyReading}
            />
          )}
          <MainBookList
            count={bookCounts.wantsToReadCount}
            books={wantToRead}
          />
        </div>
        {/* Right column */}
        <div className='grid grid-cols-1 gap-4 xl:col-span-5'>
          <section aria-labelledby='section-2-title'>
            <div className='overflow-hidden rounded-lg'>
              <div className='py-4 shadow-md'>
                <div className='space-y-4'>
                  {/* <ReadingSummary bookCounts={bookCounts} /> */}
                  {/* <UpNextCard upNext={upNext} /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
