'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import Link from 'next/link';
import NoResults from '@/components/no-results';
import DashboardHeader from './dashboard-header';
import { Reading_Status, Size } from '@/graphql/graphql';
import Image from 'next/image';
import { getCoverUrl } from '@/lib/utils';
export const MainBookList = ({
  books,
  count,
}: {
  books: any;
  count: number;
}) => {
  return (
    <div className='rounded-md border border-gray-200 bg-white p-6'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          title={'Want to Read'}
          count={count}
          href={`/library?status=${Reading_Status.WantToRead}`}
        />
      </div>
      <div className={'grid grid-cols-5 gap-4'}>
        {books.length > 0 &&
          books.map((userBook: any) => {
            const { book } = userBook;
            return (
              <>
                <Link
                  //   className='rounded-md border border-gray-700'
                  href={`/book/${book?.slug}`}
                >
                  <div className='w-full'>
                    <Image
                      src={
                        getCoverUrl(book, Size.Large) ||
                        getCoverUrl(book, Size.Small)
                      }
                      alt='Descriptive Alt Text'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='h-auto w-full rounded-md shadow-sm'
                    />
                  </div>
                </Link>
              </>
            );
          })}
      </div>
      {/* <ContentMessage isPending={isPending} view={view} content={content} /> */}
    </div>
  );
};

type ContentMessageProps = {
  isPending: boolean;
  view: string;
  content: any[]; // You should replace 'any' with the actual type of your content items
};

const LoadingMessage: React.FC<ContentMessageProps> = ({
  isPending,
  view,
  content,
}) => {
  let message = 'Loading...'; // Default message

  // If content is not loading and the view is 'want-to-read', change the message.
  if (!isPending && view === 'want-to-read') {
    message = "You don't have any Want to Read books.";
  }

  if (content.length === 0) {
    return <NoResults message={message} />;
  }

  return null;
};
