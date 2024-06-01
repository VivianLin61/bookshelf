'use client';

import * as React from 'react';
import { cn, getCoverUrl } from '@/lib/utils';
import { Icons } from '../icons';
import { Button, buttonVariants } from './button';
import { Card, CardContent, CardTitle, CardDescription } from './card';
import { Dot } from 'lucide-react';
import { createContext, useContext, useRef } from 'react';
import { BookData } from '@/types/interfaces';
import BookCover from '../book-cover';
import Link from 'next/link';
import { Cover, Size } from '@/graphql/graphql';

const BookCardContext = createContext<{ book: BookData } | null>(null);

export function useBookCardContext() {
  const context = useContext(BookCardContext);
  if (!context) {
    throw new Error(
      'BookCard.* component must be rendered as child of BookCard component'
    );
  }
  return context;
}

export default BookCardContext;

// Book Header Component
export function BookShelves() {
  const { book } = useBookCardContext();
  const shelves = book.categories;
  return (
    <div>
      {shelves.map((shelf: string, index: number) => (
        // <beige-100Button label={shelf} />
        <button
          key={index}
          className={cn(
            buttonVariants({ variant: 'pill', size: 'xs' }),
            'mb-1 mr-1'
          )}
          disabled={true}
        >
          {shelf}
        </button>
      ))}
    </div>
  );
}

export function BookInfo() {
  return (
    <div className='flex w-max items-center text-xs font-medium'>
      {/* <div>Book Year</div> */}
      <div>Published 2018</div>
      <Dot />
      <div>Avg Rating 4.8</div>
    </div>
  );
}

interface BookContentProps {
  image?: React.ReactNode;
  shelves?: React.ReactNode;
  info?: React.ReactNode;
}

export function BookContent({ image, shelves, info }: BookContentProps) {
  const { book } = useBookCardContext();

  return (
    <div className='flex items-start space-x-4 rounded-md'>
      <BookCover src={getCoverUrl(book, Size.Small)} size={'sm'} />
      <div className='flex flex-col items-start justify-center gap-1'>
        <CardTitle className='text-base leading-tight '>{book.title}</CardTitle>
        <CardDescription className='line-clamp-1 text-sm'>
          {book.author}
        </CardDescription>
        {shelves}
        {info}
      </div>
    </div>
  );
}

// Book Actions Component
export function BookActions({
  buttons,
  rating,
}: {
  buttons: React.ReactNode[];
  rating?: React.ReactNode;
}) {
  return (
    <>
      {rating}
      <div className='flex flex-grow justify-end gap-2'>
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
    </>
  );
}

interface BookCardProps {
  book: BookData;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export function BookCard({ content, actions, book }: BookCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <BookCardContext.Provider value={{ book }}>
      <div>
        <Card
          onClick={() => {
            if (linkRef.current) {
                // getSlug(book.id)
              linkRef.current.click();
            }
          }}
          className={cn(
            'cursor-pointer overflow-hidden border-none bg-beige-50 p-0 shadow-none'
          )}
        >
          <CardContent className='flex justify-between gap-4 p-4'>
            {content}
            <div>{actions}</div>
          </CardContent>
        </Card>
      </div>
      <Link ref={linkRef} href={`/book/${book?.id}`} className='hidden'></Link>
    </BookCardContext.Provider>
  );
}

BookCard.BookContent = BookContent;
BookCard.BookActions = BookActions;
