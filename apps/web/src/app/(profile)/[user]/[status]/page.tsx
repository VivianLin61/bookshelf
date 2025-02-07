import { Book, Reading_Status } from '@/graphql/graphql';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import { BookData } from '@/modules/bookshelves/types';
import Hit from '@/modules/search/components/hit';
import React from 'react';

interface StatusPageProps {
  params: { status: Reading_Status; user: string };
}

const StatusPage: React.FC<StatusPageProps> = async ({ params }) => {
  const books = await getUserBooks({
    status: {
      equals: params.status,
    },
  });
  return (
    <div className='flex justify-center'>
      <section className='w-[1220px]'>
        <main className='mt-8 flex min-h-screen flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>{params.status}</h1>
            <p className='mt-2 text-gray-500'>
              A collection of{' '}
              <span className='font-medium'>{books.length} Books</span> by
              Vivian Lin
            </p>
            <p className='mt-2 text-gray-500'>
              <span className=' rounded-full px-2 py-1 align-middle text-base '>
                Manage Collection
              </span>{' '}
            </p>
          </div>
          <ul className='mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {books.slice(0, 6).map((hit, index) => (
              <Hit key={index} hit={hit.book as Book} />
            ))}
          </ul>
        </main>
      </section>
    </div>
  );
};
export default StatusPage;
